use std::time::{ SystemTime, UNIX_EPOCH };

pub fn BuildAddrPortString(addr: &str, port: &str) -> String {
    let mut fullAddr = "".to_owned();
    
    fullAddr += addr;
    fullAddr += ":";
    if(!port.trim().is_empty()) {
        fullAddr += port;
        return fullAddr;
    }
    fullAddr += "8080";
    return fullAddr;
}

pub fn GetUnixTimestamp() -> u128 {
    SystemTime::now()
    .duration_since(UNIX_EPOCH)
    .unwrap()
    .as_millis()
}
