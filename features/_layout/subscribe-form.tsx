"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheckIcon, Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubFormSchema, type TSubFormSchema } from "@/emails/schema";
// import { subscribe } from "@/server/subscribe.action";

export default function SubscribeForm() {
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const form = useForm<TSubFormSchema>({
    resolver: zodResolver(SubFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: TSubFormSchema) => {
    // setSubmitting(true);
    // const createPromise = subscribe(data);
    // toast.promise(createPromise, {
    //   loading: "Subscribing...",
    // });
    // try {
    //   const result = await createPromise;
    //   if (result?.success) {
    //     setSubscribed(true); // trigger confirmation message
    //     form.reset();
    //     toast.success("Subscribed successfully", {
    //       description: "You have subscribed to Rathon.",
    //     });
    //   }
    // } catch {
    //   toast.error("Failed to subscribe. Please try again.", {
    //     description: "There was an error subscribing to Rathon.",
    //   });
    // } finally {
    //   setSubmitting(false);
    // }
  };

  if (subscribed) {
    return (
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-muted-foreground text-sm">
          You have subscribed to Fortunex.
        </p>
        <div className="flex items-center gap-1">
          <CircleCheckIcon className="size-5 text-green-500" />
          <p className="text-muted-foreground text-sm">
            Thanks for subscribing!
          </p>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        className="flex w-full max-w-sm items-center space-x-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-5">
              <FormLabel className="sr-only font-bold">Email</FormLabel>
              <FormControl>
                <div className="flex items-center justify-between gap-4">
                  <Input
                    aria-label="Email address"
                    autoComplete="email"
                    placeholder="youremail@gmail.com"
                    type="email"
                    {...field}
                  />
                  <Button
                    className="bg-primary text-primary-foreground"
                    disabled={submitting}
                    type="submit"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Subscribing...
                      </>
                    ) : (
                      "Subscribe"
                    )}
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
