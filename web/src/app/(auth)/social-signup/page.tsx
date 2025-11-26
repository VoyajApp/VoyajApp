"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import AuthLayout from "@/components/auth-layout";
import { AlertCircle, ArrowLeft } from "lucide-react";

type Provider = "google" | "apple" | "facebook" | "twitter";
type UserRole = "adventure" | "guide";

export default function SocialSignUpPage() {
  const [isLoading, setIsLoading] = useState<Provider | null>(null);
  const [error, setError] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSocialAuth = async (provider: Provider) => {
    if (!selectedRole) {
      setError("Please select your role first.");
      return;
    }
    if (!agreeTerms) {
      setError("Please agree to the terms and conditions.");
      return;
    }

    setIsLoading(provider);
    setError("");
    
    try {
      // TODO: Implement social authentication logic with role
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Redirect to activation or dashboard
    } catch (err) {
      setError(`Failed to sign up with ${provider}. Please try again.`);
    } finally {
      setIsLoading(null);
    }
  };

  const providers = [
    {
      id: "google" as const,
      name: "Google",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      ),
      color: "border-gray-200 hover:bg-gray-50"
    },
    {
      id: "apple" as const,
      name: "Apple",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09z"/>
        </svg>
      ),
      color: "border-gray-200 hover:bg-gray-50 text-gray-900"
    },
    {
      id: "facebook" as const,
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#1877F2" d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: "border-gray-200 hover:bg-blue-50"
    },
    {
      id: "twitter" as const,
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#1DA1F2" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: "border-gray-200 hover:bg-blue-50"
    }
  ];

  return (
    <AuthLayout 
      title="Social Sign Up" 
      description="Create your account with social authentication"
    >
      <div className="space-y-6">
        {error && (
          <Alert className="border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              {error}
            </AlertDescription>
          </Alert>
        )}

        {/* Role Selection */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-gray-700">
            I want to join as:
          </Label>
          <div className="grid grid-cols-1 gap-3">
            <button
              onClick={() => setSelectedRole("adventure")}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedRole === "adventure"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  selectedRole === "adventure" ? "border-blue-500" : "border-gray-300"
                }`}>
                  {selectedRole === "adventure" && (
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Adventure Seeker</h3>
                  <p className="text-sm text-gray-600">Discover and book amazing experiences</p>
                </div>
              </div>
            </button>
            <button
              onClick={() => setSelectedRole("guide")}
              className={`p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                selectedRole === "guide"
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  selectedRole === "guide" ? "border-blue-500" : "border-gray-300"
                }`}>
                  {selectedRole === "guide" && (
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  )}
                </div>
                <div>
                  <h3 className="font-medium text-gray-800">Local Guide</h3>
                  <p className="text-sm text-gray-600">Share your expertise and earn money</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="flex items-start space-x-2">
          <input
            id="agreeTerms"
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <Label htmlFor="agreeTerms" className="text-sm text-gray-600 leading-relaxed">
            I agree to the{" "}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-800 font-medium">
              Terms of Service
            </Link>
            {" "}and{" "}
            <Link href="/privacy" className="text-blue-600 hover:text-blue-800 font-medium">
              Privacy Policy
            </Link>
          </Label>
        </div>

        {/* Social Providers */}
        <div className="space-y-3">
          <Label className="text-sm font-medium text-gray-700">
            Choose your sign-up method:
          </Label>
          {providers.map((provider) => (
            <Button
              key={provider.id}
              variant="outline"
              className={`w-full h-12 ${provider.color} transition-all duration-200 ${!selectedRole || !agreeTerms ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={() => handleSocialAuth(provider.id)}
              disabled={isLoading !== null || !selectedRole || !agreeTerms}
            >
              {isLoading === provider.id ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 mr-3 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
                  Creating account...
                </div>
              ) : (
                <div className="flex items-center">
                  <span className="mr-3">{provider.icon}</span>
                  Sign up with {provider.name}
                </div>
              )}
            </Button>
          ))}
        </div>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <Separator className="w-full" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or</span>
            </div>
          </div>

          <div className="mt-4">
            <Link href="/signup">
              <Button 
                variant="outline" 
                className="w-full h-11 border-gray-200 hover:bg-gray-50"
              >
                Sign up with Email
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link 
            href="/signup" 
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to sign up
          </Link>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link 
              href="/signin" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}
