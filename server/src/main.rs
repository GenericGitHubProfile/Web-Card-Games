#![allow(warnings, unused)]

#[macro_use]
extern crate log;

mod util;
use crate::util::{ GetUnixTimestamp };

mod WCG;

use std::env;
use actix_web::{ App, HttpResponse, HttpServer, Responder, get };
use dotenv::dotenv;
use listenfd::ListenFd;


#[actix_rt::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();
    env_logger::init();

    let mut listenfd = ListenFd::from_env();
    let mut server = HttpServer::new(|| 
        App::new().configure(WCG::InitRoutes)
    );

    server = match listenfd.take_tcp_listener(0)? {
        Some(listener) => server.listen(listener)?,
        None => {
            let host = env::var("HOST").expect("Host not set");
            let port = env::var("PORT").expect("Port not set");
            server.bind(format!("{}:{}", host, port))?
        }
    };

    let startTime = GetUnixTimestamp();
    env::set_var("START_TIME", startTime.to_string());

    info!("Server starting on port: {}", env::var("PORT").expect("Port not set"));
    server.run().await
}