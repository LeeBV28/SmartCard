create database SamrtCard;

create table Card (
	ID int identity not null primary key,
	IMG varchar(200) not null,
	ImgFF varchar(200) not null,
	ImgBF varchar(200) not null,
	ImgWhiteFF varchar(200) not null,
	ImgWhiteBF varchar(200) not null,
	CorlorFF char(20),
	ColorBF1 char(20),
	ColorBF2 char(20),
);
create table UserInfomation (
	ID int identity not null primary key,
	NickName char(20),
	Pass char(50),
	CardID int foreign key references Card(ID),
	QrCode varchar(200),
);
Create table UserCard (
	IDUser int foreign key references UserInfomation(ID),
	IDCard int foreign key references Card(ID),
	NameFF Nchar(50),
	Sloganff Nchar(50),
	NameBF Nchar(50),
	SloganBF Nchar(50),
	Address Nvarchar(200),
	Phone int,
	mail char(50),
	web char(50),
);
create table OrderCard (
	 IDCard int foreign key references Card(ID),
	 NameOrder Nchar(50),
	 PhoneOrder int,
	 AddressOrder Nvarchar(200),
	 EmailOrder char(50),
);
