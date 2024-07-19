import { relations } from "drizzle-orm";
import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users_table", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email:text("email").notNull().unique()
})

export const usersRelations = relations(usersTable, ({many}) => ({
  todos: many(todosTable)
}))

export const todosTable = pgTable("todos_table", {
  id: serial("id").primaryKey().unique(),
  todoContent: text("todo_content").notNull(),
  userId: integer("user_id")
    .notNull()
    .references(() => usersTable.id, { onDelete: "cascade" }),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});

export const todosRelations = relations(todosTable, ({one}) => ({
  author: one(usersTable, {
    fields: [todosTable.userId],
    references: [usersTable.id]
  })
}))

export type InsertUser = typeof usersTable.$inferInsert
export type SelectUser = typeof usersTable.$inferSelect
//
export type InsertTodo = typeof todosTable.$inferInsert
export type SelectTodo = typeof todosTable.$inferSelect
