use serde::{ Deserialize, Serialize };

#[derive(Serialize, Deserialize)]
pub struct Status {
    pub status: String,
    pub uptime: u128
}