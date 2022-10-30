use serde::{ Deserialize, Serialize };

#[derive(Serialize, Deserialize)]
pub struct Card {
    suit: Suit,
    value: Value
}

#[derive(Serialize, Deserialize)]
enum Suit {
    Clubs,
    Hearts,
    Spades,
    Diamonds
}

#[non_exhaustive]
#[derive(Serialize, Deserialize)]
struct Value;
impl Value {
    pub const ACE: &str = "Ace";
    pub const TWO: &str = "2";
    pub const THREE: &str = "3";
    pub const FOUR: &str = "4";
    pub const FIVE: &str = "5";
    pub const SIX: &str = "6";
    pub const SEVEN: &str = "7";
    pub const EIGHT: &str = "8";
    pub const NINE: &str = "9";
    pub const TEN: &str = "10";
    pub const JACK: &str = "Jack";
    pub const QUEEN: &str = "Queen";
    pub const KING: &str = "King";
}