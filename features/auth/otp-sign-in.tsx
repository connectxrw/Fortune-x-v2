"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SubmitButton } from "@/components/custom/submit-button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Spinner } from "@/components/ui/spinner";
// import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  email: z.email(),
});

type Props = {
  className?: string;
};

export function OTPSignIn({ className }: Props) {
  //   const verifyOtp = useAction(verifyOtpAction);
  const [isLoading, setLoading] = useState(false);
  const [isSent, setSent] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [email, setEmail] = useState<string>();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);

    // await authClient.emailOtp.sendVerificationOtp(
    //   {
    //     email: values.email,
    //     type: "sign-in",
    //   },
    //   {
    //     onRequest: () => setLoading(true),
    //     onSuccess: () => {
    //       setLoading(false);
    //       setSent(true);
    //       setEmail(values.email);
    //       toast.success("Verification code sent to your email!");
    //     },
    //     onError: (ctx) => {
    //       setLoading(false);
    //       toast.error(ctx.error.message);
    //     },
    //   }
    // );

    setSent(true);
    setLoading(false);
  }

  function onComplete(token: string) {
    if (!email) return;

    setIsVerifying(true);

    // await authClient.signIn.emailOtp(
    //   {
    //     email,
    //     otp: token,
    //   },
    //   {
    //     onRequest: () => setIsVerifying(true),
    //     onSuccess: () => {
    //       setIsVerifying(false);
    //       toast.success("Successfully signed in!");
    //       router.push("/");
    //     },
    //     onError: (ctx) => {
    //       setIsVerifying(false);
    //       toast.error(ctx.error.message);
    //     },
    //   }
    // );
  }

  if (isSent) {
    return (
      <div className={cn("flex flex-col items-center space-y-4", className)}>
        <div className="flex h-[62px] w-full items-center justify-center">
          {isVerifying ? (
            <div className="flex h-full w-full items-center justify-center border border-input bg-background/95">
              <div className="flex items-center space-x-2 rounded-md bg-background px-4 py-2 shadow-sm">
                <Spinner className="size-4 text-primary" />
                <span className="font-medium text-foreground text-sm">
                  Verifying...
                </span>
              </div>
            </div>
          ) : (
            <InputOTP
              autoFocus
              disabled={isVerifying}
              maxLength={6}
              onComplete={onComplete}
            >
              <InputOTPGroup>
                <InputOTPSlot className="size-14" index={0} />
                <InputOTPSlot className="size-14" index={1} />
                <InputOTPSlot className="size-14" index={2} />
                <InputOTPSlot className="size-14" index={3} />
                <InputOTPSlot className="size-14" index={4} />
                <InputOTPSlot className="size-14" index={5} />
              </InputOTPGroup>
            </InputOTP>
          )}
        </div>

        <div className="flex space-x-2">
          <span className="text-[#878787] text-sm">
            Didn't receive the email?
          </span>
          <button
            className="font-medium text-primary text-sm underline"
            disabled={isVerifying}
            onClick={() => setSent(false)}
            type="button"
          >
            Resend code
          </button>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form className="w-full" onSubmit={form.handleSubmit(onSubmit)}>
        <div className={cn("flex flex-col space-y-4", className)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="Enter email address"
                    {...field}
                    autoCapitalize="false"
                    autoCorrect="false"
                    spellCheck="false"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <SubmitButton
            className="flex h-[40px] w-full space-x-2 bg-primary px-6 py-4 font-medium text-secondary"
            isSubmitting={isLoading}
            type="submit"
          >
            Continue
          </SubmitButton>
        </div>
      </form>
    </Form>
  );
}
