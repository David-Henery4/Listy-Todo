import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp, boolean, uuid} from "drizzle-orm/pg-core";

export const todosList = pgTable("todos_list", {
  id: uuid("id").primaryKey().unique(),
  // id: serial("id").primaryKey().unique(),
  todoContent: text("todo_content").notNull(),
  userId: uuid("user_id").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
  isCompleted: boolean("is_completed").notNull(),
  // orderNumber: integer("order_number"),
});

// id: string;
// userId: string;
// todoContent: string;
// isCompleted: boolean;

//
export type InsertTodo = typeof todosList.$inferInsert;
export type SelectTodo = typeof todosList.$inferSelect;
