"use client";

import { useState, useEffect, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AuthLayout from "@/components/auth-layout";
import { CheckCircle, Mail, RefreshCw } from "lucide-react";

export default function ActivatePage() {
  const searchParams = useSearchParams();
  const initialVerificationCode = searchParams.get("code") ?? "";
  const [verificationCode, setVerificationCode] = useState(initialVerificationCode);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const email = searchParams.get("email") ?? "";
  const userRoleParam = searchParams.get("role");
  const userRole = userRoleParam === "guide" || userRoleParam === "adventure" ? userRoleParam : null;

  const handleAutoActivation = useCallback(async () => {
    setIsLoading(true);
    // TODO: Auto-activate with code from URL
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!initialVerificationCode) return;
    const timer = setTimeout(() => {
      void handleAutoActivation();
    }, 0);
    return () => clearTimeout(timer);
  }, [initialVerificationCode, handleAutoActivation]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implement activation logic
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleResendCode = async () => {
    setIsResending(true);
    // TODO: Implement resend code logic
    setTimeout(() => {
      setIsResending(false);
    }, 1000);
  };

  const getDashboardLink = () => {
    return userRole === "guide" ? "/guide/dashboard" : "/adventure/dashboard";
  };

  const getRoleText = () => {
    return userRole === "guide" ? "Guide" : "Adventure Seeker";
  };

  return (
    <AuthLayout 
      title="Account Activation" 
      description="Verify your email to complete registration"
    >
      {!isSuccess ? (
        <>
          <div className="space-y-4">
            {email && (
              <Alert className="border-blue-200 bg-blue-50">
                <Mail className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800">
                  We sent a verification code to <strong>{email}</strong>
                </AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="code" className="text-sm font-medium text-gray-700">
                  Verification Code
                </Label>
                <Input
                  id="code"
                  type="text"
                  placeholder="Enter 6-digit code"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
                  className="h-12 text-center text-lg font-mono tracking-widest border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                  maxLength={6}
                  required
                />
              </div>

              <Button 
                type="submit" 
                className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200"
                disabled={isLoading || verificationCode.length !== 6}
              >
                {isLoading ? "Activating..." : "Activate Account"}
              </Button>
            </form>

            <div className="space-y-3">
              <p className="text-sm text-gray-600 text-center">
                Did not receive the code?
              </p>
              
              <Button 
                onClick={handleResendCode}
                variant="outline"
                className="w-full h-11 border-gray-200 hover:bg-gray-50"
                disabled={isResending}
              >
                {isResending ? (
                  <>
                    <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Resend Code"
                )}
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="space-y-6">
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              <strong>Welcome to VoyajApp!</strong> Your account has been activated successfully.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h3 className="text-lg font-semibold text-gray-800">
                You&apos;re all set, {getRoleText()}!
              </h3>
              <p className="text-sm text-gray-600">
                Start exploring amazing {userRole === "guide" ? "opportunities to share your expertise" : "adventures waiting for you"}.
              </p>
            </div>
            
            <Link href={getDashboardLink()}>
              <Button className="w-full h-11 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium">
                Go to {userRole === "guide" ? "Guide" : "Adventure"} Dashboard
              </Button>
            </Link>

            <Link href="/signin">
              <Button variant="outline" className="w-full h-11 border-gray-200 hover:bg-gray-50">
                Sign In Later
              </Button>
            </Link>
          </div>
        </div>
      )}
    </AuthLayout>
  );
}
