const Primary = (theme) => `primary-${theme ? "dark" : "light"}`;
const Secondary = (theme) => `secondary-${theme ? "dark" : "light"}`;
const Box = (theme) => `box-${theme ? "dark" : "light"}`;
const Hover = (theme) => `hover-${theme ? "dark" : "light"}`;
const Background = (theme) => `background-${theme ? 'dark' : 'light'}`

export const classTheme = {
    Primary: Primary,
    Secondary : Secondary,
    Box: Box,
    Hover : Hover,
    Background: Background
}

