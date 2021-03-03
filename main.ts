function clear () {
    OLED12864_I2C.showString(
    0,
    0,
    "    ",
    1
    )
    OLED12864_I2C.showString(
    0,
    1,
    "      ",
    1
    )
    OLED12864_I2C.showString(
    0,
    2,
    "       ",
    1
    )
    OLED12864_I2C.showString(
    0,
    3,
    "      ",
    1
    )
    OLED12864_I2C.showString(
    0,
    4,
    "      ",
    1
    )
    OLED12864_I2C.showString(
    0,
    5,
    "       ",
    1
    )
    OLED12864_I2C.showString(
    0,
    6,
    "     ",
    1
    )
    OLED12864_I2C.showString(
    0,
    7,
    "     ",
    1
    )
}
OLED12864_I2C.init(60)
clear()
basic.forever(function () {
    OLED12864_I2C.pixel(10, 25, 1)
    OLED12864_I2C.pixel(10, 26, 1)
    OLED12864_I2C.pixel(10, 27, 1)
    OLED12864_I2C.pixel(10, 28, 1)
    OLED12864_I2C.pixel(10, 29, 1)
    OLED12864_I2C.pixel(10, 30, 1)
    OLED12864_I2C.pixel(11, 25, 1)
    OLED12864_I2C.pixel(11, 26, 1)
    OLED12864_I2C.pixel(11, 27, 1)
    OLED12864_I2C.pixel(11, 28, 1)
    OLED12864_I2C.pixel(11, 29, 1)
    OLED12864_I2C.pixel(11, 30, 1)
    OLED12864_I2C.pixel(54, 25, 1)
    OLED12864_I2C.pixel(54, 26, 1)
    OLED12864_I2C.pixel(54, 27, 1)
    OLED12864_I2C.pixel(54, 28, 1)
    OLED12864_I2C.pixel(54, 29, 1)
    OLED12864_I2C.pixel(54, 30, 1)
    OLED12864_I2C.pixel(55, 25, 1)
    OLED12864_I2C.pixel(55, 26, 1)
    OLED12864_I2C.pixel(55, 27, 1)
    OLED12864_I2C.pixel(55, 28, 1)
    OLED12864_I2C.pixel(55, 29, 1)
    OLED12864_I2C.pixel(55, 30, 1)
    OLED12864_I2C.rect(
    26,
    42,
    29,
    43,
    1
    )
    OLED12864_I2C.rect(
    36,
    42,
    39,
    43,
    1
    )
    OLED12864_I2C.rect(
    30,
    40,
    31,
    41,
    1
    )
    OLED12864_I2C.rect(
    34,
    40,
    35,
    41,
    1
    )
    OLED12864_I2C.rect(
    24,
    40,
    25,
    41,
    1
    )
    OLED12864_I2C.rect(
    40,
    40,
    41,
    41,
    1
    )
    OLED12864_I2C.rect(
    32,
    36,
    33,
    39,
    1
    )
    OLED12864_I2C.rect(
    22,
    36,
    23,
    39,
    1
    )
    OLED12864_I2C.rect(
    42,
    36,
    43,
    39,
    1
    )
})
basic.forever(function () {
	
})
