<template>
  <div class="flex flex-col mb-8">
    <span class="text-sm text-slate-400">Team Phoenix</span>
    <h1 class="text-2xl font-semibold mb-5">Product Sprint</h1>
    <div class="flex space-x-5">
      <button class="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg text-sm">
        All Tickets
      </button>
      <button
        class="text-slate-500 hover:ring-1 hover:ring-slate-200 hover:text-blue-600 px-4 py-2 rounded-lg text-sm"
      >
        Development
      </button>
      <button
        class="text-slate-500 hover:ring-1 hover:ring-slate-200 hover:text-blue-600 px-4 py-2 rounded-lg text-sm"
      >
        UI Design
      </button>
    </div>
  </div>
  <div class="flex space-x-10 overflow-auto flex-grow">
    <BucketContainer
      v-for="bucket in buckets"
      :bucket="bucket"
      :count="countTasks(bucket)"
    >
      <TasksList
        :tasks="findTasks(bucket)"
        @drop="onDropElement(bucket)($event)"
        @dragenter.prevent=""
        @dragover.prevent=""
      >
        <template #default="{ task }">
          <TaskCard
            :task="task"
            draggable="true"
            @dragstart="onDragStart(task)($event)"
          ></TaskCard>
        </template>
      </TasksList>
    </BucketContainer>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { Bucket, Task } from "../models/board.models";
import BucketContainer from "../components/board/BucketContainer.vue";
import TaskCard from "../components/board/TaskCard.vue";
import TasksList from "../components/board/TasksList.vue";

const buckets = reactive<Bucket[]>([
  {
    id: "bucket-1",
    name: "To Do",
  },
  {
    id: "bucket-2",
    name: "In Progress",
  },
  {
    id: "bucket-3",
    name: "Completed",
  },
]);

const tasks = reactive<Task[]>([
  {
    id: "bucket-1-task-1",
    title: "JNH-1234",
    description: "As a User I want to create a new ticket",
    points: 12,
    user: {
      name: "John Doe",
      profileImageUrl:
        "https://static.generated.photos/vue-static/home/hero/6.png",
    },
    bucketId: "bucket-1",
  },
  {
    id: "bucket-2-task-1",
    title: "JNH-1235",
    description: "As a User I want to create a new option",
    points: 12,
    user: {
      name: "John Doe",
      profileImageUrl:
        "https://static.generated.photos/vue-static/home/hero/6.png",
    },
    bucketId: "bucket-2",
  },
  {
    id: "bucket-2-task-2",
    title: "JNH-1236",
    description: "As a User I want to create a new package",
    points: 12,
    user: {
      name: "Sara Doe",
      profileImageUrl:
        "https://static.generated.photos/vue-static/home/hero/4.png",
    },
    bucketId: "bucket-2",
  },
  {
    id: "bucket-3-task-1",
    title: "JNH-1237",
    description: "As a User I want to create a new ticket",
    points: 12,
    user: {
      name: "Sara Doe",
      profileImageUrl:
        "https://static.generated.photos/vue-static/home/hero/4.png",
    },
    bucketId: "bucket-3",
  },
  {
    id: "bucket-3-task-2",
    title: "JNH-1238",
    description: "As a User I want to create a new ticket",
    points: 12,
    user: {
      name: "Jane Doe",
      profileImageUrl:
        "https://static.generated.photos/vue-static/home/hero/3.png",
    },
    bucketId: "bucket-3",
  },
]);

const findTasks = (bucket: Bucket) =>
  tasks.filter((currentTask) => currentTask.bucketId === bucket.id);

const countTasks = (bucket: Bucket) => findTasks(bucket).length;

const onDragStart = (task: Task) => (event: DragEvent) => {
  if (!event.dataTransfer) return;

  event.dataTransfer.dropEffect = "move";
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("taskId", task.id);
};

const onDropElement = (bucket: Bucket) => (event: DragEvent) => {
  const taskId = event.dataTransfer?.getData("taskId");
  const task = tasks.find((currentTask) => currentTask.id === taskId);
  // If task doesn't exists
  if (!task) return;
  task.bucketId = bucket.id;
};
</script>