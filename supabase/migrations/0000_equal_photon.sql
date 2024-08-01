CREATE TABLE IF NOT EXISTS "todos_list" (
	"id" uuid PRIMARY KEY NOT NULL,
	"todo_content" text NOT NULL,
	"user_id" uuid NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp NOT NULL,
	"is_completed" boolean NOT NULL,
	CONSTRAINT "todos_list_id_unique" UNIQUE("id")
);
