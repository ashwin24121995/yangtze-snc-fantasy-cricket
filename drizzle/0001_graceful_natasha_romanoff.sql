CREATE TABLE `matches` (
	`id` int AUTO_INCREMENT NOT NULL,
	`matchName` varchar(255) NOT NULL,
	`team1` varchar(100) NOT NULL,
	`team2` varchar(100) NOT NULL,
	`matchDate` timestamp NOT NULL,
	`venue` varchar(255),
	`matchType` varchar(50),
	`status` enum('upcoming','live','completed','cancelled') NOT NULL DEFAULT 'upcoming',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `matches_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `playerPerformances` (
	`id` int AUTO_INCREMENT NOT NULL,
	`matchId` int NOT NULL,
	`playerId` int NOT NULL,
	`runs` int DEFAULT 0,
	`wickets` int DEFAULT 0,
	`catches` int DEFAULT 0,
	`stumpings` int DEFAULT 0,
	`points` int NOT NULL DEFAULT 0,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `playerPerformances_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `players` (
	`id` int AUTO_INCREMENT NOT NULL,
	`playerName` varchar(255) NOT NULL,
	`team` varchar(100) NOT NULL,
	`role` varchar(50) NOT NULL,
	`credits` int NOT NULL,
	`imageUrl` text,
	`stats` text,
	`isActive` int NOT NULL DEFAULT 1,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `players_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `teamPlayers` (
	`id` int AUTO_INCREMENT NOT NULL,
	`teamId` int NOT NULL,
	`playerId` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `teamPlayers_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `teams` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`matchId` int NOT NULL,
	`teamName` varchar(255) NOT NULL,
	`captainId` int NOT NULL,
	`viceCaptainId` int NOT NULL,
	`totalCredits` int NOT NULL,
	`points` int NOT NULL DEFAULT 0,
	`rank` int,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `teams_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` DROP INDEX `users_openId_unique`;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `name` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` MODIFY COLUMN `email` varchar(320) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `passwordHash` varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `dateOfBirth` timestamp NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `state` varchar(100) NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `phone` varchar(20);--> statement-breakpoint
ALTER TABLE `users` ADD `emailVerified` int DEFAULT 0 NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD `isActive` int DEFAULT 1 NOT NULL;--> statement-breakpoint
ALTER TABLE `users` ADD CONSTRAINT `users_email_unique` UNIQUE(`email`);--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `openId`;--> statement-breakpoint
ALTER TABLE `users` DROP COLUMN `loginMethod`;