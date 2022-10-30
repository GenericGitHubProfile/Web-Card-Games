use actix_web::{ get, post, put, delete, web, HttpResponse, Responder };
use serde_json::json;
use std::env;

use crate::util::{ GetUnixTimestamp };
use crate::WCG::Status;

pub fn InitRoutes(cfg: &mut web::ServiceConfig) {
    cfg.service(Index);
    cfg.service(GetStatus);
}

#[get("/")]
async fn Index() -> impl Responder {
    HttpResponse::Ok().json(json!({"response": "object"}))
}

#[get("/status")]
async fn GetStatus() -> impl Responder {
    let startTime: u128 = env::var("START_TIME").expect("Server Not Started").parse::<u128>().unwrap();
    let status = Status {
        status: "running".to_owned(),
        uptime: (GetUnixTimestamp() - startTime)
    };
    HttpResponse::Ok().json(status)
}