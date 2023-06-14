-- @block
CREATE TABLE Account(
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(255),
    passwrd VARCHAR(255),
    bio TEXT,
    picture_name VARCHAR(255), /* need to separate name from .jpeg(extension) */
    picture_dir VARCHAR(255), /* need folder/directory profile pictures are in */
    age INT,
    birthday DATE,
    occupation VARCHAR(255),
    firstLastName VARCHAR(255),
    phoneNumber VARCHAR(255),
    emailAddress VARCHAR(255)
)

-- @block
CREATE TABLE Messages(
    id INT PRIMARY KEY AUTO_INCREMENT,
    channel_id INT,
    account_id INT,
    timeSent DATETIME,
    messagetxt TEXT,
    FOREIGN KEY (channel_id) REFERENCES Channels(id),
    FOREIGN KEY (account_id) REFERENCES Account(id)
) 

-- @block
CREATE TABLE Channels(
    id INT PRIMARY KEY AUTO_INCREMENT,
    channel_name VARCHAR(255)
)

/*Class Profile*/

/*In profile Directory getProfile()*/
    




