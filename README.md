
# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Todo List Lab
Let's make a To-Do List application!

You can find the starter code for this exercise [here](/starter-code).

This lab will give you practice with many of the concepts that we've learned so far in this course: DOM traversal, event delegation, and the `this` keyword.

## Step 1 - Pseudocode
Spend 10 minutes writing out pseudocode for the To-Do List app. Feel free to work in groups on this step!

## Step 2 - Adding Tasks to Our List
For the first portion of this exercise, we'll work on adding tasks to our To-Do List.
Here's what the HTML for our task form and the unordered task list looks like:
```html
<form class="task-form">
  <input type="text" class="new-item-description" placeholder="What do you need to do?">
  <button type="submit" class="add-task button">Add Task</button>
</form>

<ul id="taskList"></ul>
```

When the `.task-form` is submitted:
  - Select the `input` field into which the user has typed their To-Do List info. Get the value of that input field. (Hint: use the `.value` property to get the value)
  - Create a list item for the new task that includes the value the user typed in. Here's what that new list item should look like:
```html
<li>
  <input type="checkbox">
    <span class="item">{Item Text}</span>
    <a href="#" class="edit">Edit</a>
    <a href="#" class="remove">Remove</a>
</li>
```

Append the list item to our ordered To-Do List.


## Step 3 - Marking Tasks as Complete
When a checkbox gets toggled (hint: the `change` event):
  - Find the parent of the checkbox that was toggled.
  - Toggle the `.completed` class on the parent. Refer to the CSS file to see what styles will be added with the completed class.

> Hint: Since the list items don't exist when the page first loads, you'll need to use event delegation here.
> Hint #2: Use the `this` keyword and DOM traversal to find the parent of the checkbox that was just toggled.

## Step 4 - Removing a Task
When the user clicks on the "remove" anchor inside of a task list item, remove that task.

> Hint: Since the list items don't exist when the page first loads, you'll need to use event delegation here.

#### Step 5 - Editing a Task
When the user clicks on the "edit" anchor, a form should display in place of the task the user clicked on. Here's what the form should look like:
```html
<form class="editor">
  <input type="text" value="{itemText}">
  <button type="submit" class="button">Save</button>
</form>
```

> Hint: Since the list items don't exist when the page first loads, you'll need to use event delegation here.

## Step 6 - Saving Edits
When the user clicks on the "save" button while in edit mode, the edit form should be replaced by a list item that contains any edits they entered into the edit form's input field.

Here's what that updated list item should look like:
```html
<input type="checkbox">
<span class="item">{textTheUserEdited}</span>
<a href="#" class="edit">Edit</a>
<a href="#" class="remove">Remove</a>
```
> Hint: Since the list items don't exist when the page first loads, you'll need to use event delegation here.

## Bonus - Counting Tasks
Create a function `updateCount`.
  - When this function runs, count the number of items in our task list that do not have the class `completed`.
  - Display this count in `.count`.
  - Call this function from the various events where the count should be updated (when a task is added, removed, etc.).

## Bonus - Deleting All Tasks
When the user clicks the `.delete-tasks` button, the task list should empty.

## Bonus - Clearing Completed Tasks
When the user clicks the `.clear-completed` button, any tasks that have been completed (i.e., that have the class `.completed`) should be removed from the list.
