import { Input } from "@/shadcomponents/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcomponents/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import formSchema from "@/validation/zod";
import { Link } from "react-router-dom";
import { Button } from "@/shadcomponents/ui/button";
import axios from "axios";


function ProfileForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
    },
  });
  const onSubmit = (data) => {
    axios.post('/api/users',data)
    console.log(data);
  };
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <Form {...form}>
              <form
                onSubmit={form?.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form?.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter Your username" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form?.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>FirstName</FormLabel>
                      <FormControl>
                        <Input
                          type="name"
                          placeholder="Enter Your FirstName"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form?.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>LastName</FormLabel>
                      <FormControl>
                        <Input
                          type="name"
                          placeholder="Enter Your LastName"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="w-full" type="submit">
                  Submit
                </Button>
              </form>
            </Form>
            <Button className="w-full" asChild>
              <Link to="/data">Data</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileForm;
