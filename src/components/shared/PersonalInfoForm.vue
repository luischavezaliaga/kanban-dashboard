<template>
  <Banner> Big news! We're excited to announce a brand new product. </Banner>
  <div class="max-w-3xl mx-auto">
    <form class="flex flex-col space-y-4 p-8" @submit="onSubmit">
      <h1 class="text-2xl">Personal Information</h1>
      <div class="flex flex-col space-y-5">
        <Field name="name" #default="{ field, errorMessage, meta }">
          <TextField
            v-bind="field"
            label="Name"
            type="text"
            :error-message="meta.touched ? errorMessage : undefined"
          />
        </Field>
        <Field name="age" #default="{ field, errorMessage, meta }">
          <TextField
            v-bind="field"
            label="Age"
            type="number"
            :error-message="meta.touched ? errorMessage : undefined"
          />
        </Field>
        <Field name="address" #default="{ field, errorMessage, meta }">
          <TextField
            v-bind="field"
            label="Address"
            type="text"
            :error-message="meta.touched ? errorMessage : undefined"
          />
        </Field>
        <Field name="email" #default="{ field, errorMessage, meta }">
          <TextField
            v-bind="field"
            label="Email"
            type="email"
            :error-message="meta.touched ? errorMessage : undefined"
          />
        </Field>
      </div>
      <div class="flex justify-end">
        <Button type="submit" color="btn-secondary" :disabled="isSubmitting">
          Save
        </Button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import Banner from "./components/Banner.vue";
import TextField from "./components/TextField.vue";
import Button from "./components/Button.vue";
import { useForm, Field } from "vee-validate";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string().required(),
  age: yup.number().required(),
  address: yup.string().required(),
  email: yup.string().required().email(),
});

interface Person {
  name: string;
  age: number;
  address: string;
  email: string;
}

const { handleSubmit, isSubmitting } = useForm<Person>({
  validationSchema: validationSchema,
});

const onSubmit = handleSubmit((person: Person) => {
  console.log(
    `Hi ${person.name}! you are ${person.age} years old and you live in ${person.address}`
  );
});
</script>
