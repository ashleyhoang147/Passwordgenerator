# Passwordgenerator
Purpose of the project:
The application should generate a password based on the following criteria:
1. Length (must be between 8 and 128 characters)


2. Character type:


    Special characters (!#$%&'()*+,-./:;<=>?@[\]^_`{|}~")


    Numeric characters (0-9)


    Lowercase characters (abcdefghijklmnopqrstuvwxyz)


    Uppercase characters (ABCDEFGHIJKLMNOPQRSTUVWXYZ)

Brainstorming:
Given a random password lenght -> need one var that generates a random number (lenght of characters) between 8 to 128
Password needs to include all type of characters -> need one var that store all the characters mentioned above
The application needs to be able to generate random password based on random length (between 8 to 128) and random characters (run charAt on the var that store all the charactors randomly in a loop based on the random lenghth generated)