# ToolsofaTrade

## About the Users

This App was built with the intention for the user to see what tools they own and where said tools are accross locations. The tools are created in the DB with a name, type, and manufacturer. After the tool has been created in the DB, the user may then go and update the tool and modify the original data, but also they may add a location to that tool also. This would be helpful for a multi shop owner to see where a majority of his tools are and track their locations.

## Features:
# CRUD:
 - The User has the ability to create, read, update, and delete the games they have created and played.

# Tool Location
 - The user can track where their tool is located with an update function.

 # Filter for Type
  - A filter has been included to filter the users tools based on type.

  # DB creation
    - This is the SQL query needed to  create the DB and some sample data.

/*******************************************************************************
   Drop database if it exists
********************************************************************************/
IF EXISTS (SELECT name FROM master.dbo.sysdatabases WHERE name = N'ToolsotTrade')
BEGIN
	ALTER DATABASE [ToolsotTrade] SET OFFLINE WITH ROLLBACK IMMEDIATE;
	ALTER DATABASE [ToolsotTrade] SET ONLINE;
	DROP DATABASE [ToolsotTrade];
END

GO

/*******************************************************************************
   Create database
********************************************************************************/
CREATE DATABASE [ToolsotTrade];

GO

USE [ToolsotTrade];

GO

/*******************************************************************************
   Create Tables
********************************************************************************/
CREATE TABLE [dbo].[Tools]
(
	[ToolId] INT NOT NULL IDENTITY,
	[Name] NVARCHAR(160) NOT NULL,
	[Type] NVARCHAR(50) NOT NULL,
	[Manufacturer] NVARCHAR(50) NOT NULL
);
GO
CREATE TABLE [dbo].[BuisnessCollection]
(
	[Id] INT NOT NULL IDENTITY
	[Location] NVARCHAR(50) NOT NULL
	[ToolId] INT NOT NULL
);
GO
/*******************************************************************************
   Populate Tables
********************************************************************************/
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('SAE Wrench Set','Multi','Craftsman'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('Metric Wrench Set','Multi','Craftsman'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('SAE Socket Set','Multi','Kobalt'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('Metric Socket Set','Multi','Kobalt'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('Claw Hammer','Wood','Kobalt'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('Tape Measure','Wood','Kobalt'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('Table Saw','Wood','DeWalt'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('Power Drill','Multi','Milwaekee'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('Power Drill','Multi','Kobalt'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('Miter Saw','Wood','DeWalt'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('Circular Saw','Wood','Ryobi'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('Nail Gun','Wood','Ryobi'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('Belt Sander','Wood','Makita'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('Propane Forger','Metal','Vevor'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('99lb Anvil','Metal','Vevor'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('Forging Hammer','Metal','Diamond'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('3Ton Jack','Auto','Pittsburgh'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('Jack Stands','Auto','Pittsburgh'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('Torque Wrench','Auto','Pittsburgh'); 
INSERT INTO [dbo].[Tools] ([Name], [Type], [Manufacturer]) VALUES ('40in Breaker Bar','Auto','Capri');

INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Nashville', 1)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Nashville', 2)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Nashville', 3)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Nashville', 4)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Nashville', 9)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Nashville', 17)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Nashville', 18)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Nashville', 19)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Nashville', 20)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Clarksville', 5)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Clarksville', 6)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Clarksville', 7)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Clarksville', 11)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Clarksville', 12)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Clarksville', 13)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Franklin', 14)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Franklin', 15)
INSERT INTO [dbo].[BuisnessCollection] ([Location], [ToolId]) VALUES ('Franklin', 16)


