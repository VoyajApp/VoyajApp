# Voyaj – Page Scaffold Guide

This document describes all the pages you need to create in the Next.js app. For now, each page should contain only:

* A top-level `<div>` with a page title
* Sub-sections as `<div>` blocks
* Placeholder `<Link>` components to other pages

No styling. No functionality. No real data.

---

# 1. Landing & Static Pages

## 1.1 `/` — Landing Page

**Sections (divs)**

* Hero
* Featured missions
* Adventure categories
* Testimonials
* Footer

**Placeholder links**

* `/about`
* `/privacy`
* `/signup`
* `/signin`

---

## 1.2 `/about` — About Us Page

**Sections**

* Meet the team
* Brand story & mission

**Links**

* `/`

---

## 1.3 `/privacy` — Privacy Policy / Terms

**Sections**

* Legal text placeholder

**Links**

* `/`

---

# 2. User Registration & Login

## 2.1 `/signup` — Sign Up Page

**Sections**

* User information placeholder
* Terms & Privacy checkbox
* Social signup placeholder

**Links**

<!-- * `/social-signup` -->
* `/signin`
* `/activate`

---

## 2.2 `/signin` — Sign In Page

**Sections**

* Email/password fields placeholder
* Social sign-in placeholder

**Links**

* `/forgot-password`
* `/signup`
* `/signin`

---

<!-- ## 2.3 `/social-signup` — Social Sign Up Page -->
DEPRECATED: There shouldn't be a separate page for social signup

**Sections**

* Social provider placeholder

**Links**

* `/activate`

---

<!-- ## 2.4 `/social-signin` — Social Sign In Page -->
DEPRECATED: There shouldn't be a separate page for social signin

**Sections**

* Social login placeholder

**Links**

* `/signin`

---

## 2.5 `/forgot-password` — Forgot Password Page

**Sections**

* Email input placeholder

**Links**

* `/reset-password`

---

## 2.6 `/reset-password` — Reset Password Page

**Sections**

* New password fields placeholder

**Links**

* `/signin`

---

## 2.7 `/activate` — Account Activation Page

**Sections**

* Verification code input placeholder

**Links**

* `/adventure/dashboard`
* `/guide/dashboard`

---

# 3. Adventure User Pages

## 3.1 `/adventure/dashboard`

**Sections**

* Mission feed placeholder
* Recommended adventures placeholder
* Search/filter placeholder
* Mission progress bar placeholder

**Links**

* `/adventure/profile`
* `/adventure/details`
* `/adventure/log`
* `/adventure/active`

---

## 3.2 `/adventure/profile`

**Sections**

* Edit profile placeholder
* Preferences placeholder

**Links**

* `/adventure/dashboard`

---

## 3.3 `/adventure/details`

**Sections**

* Mission description placeholder
* Difficulty placeholder
* Start button placeholder

**Links**

* `/adventure/active`
* `/adventure/dashboard`

---

## 3.4 `/adventure/log`

**Sections**

* List of past adventures placeholder

**Links**

* `/adventure/dashboard`

---

## 3.5 `/adventure/active`

**Sections**

* Map placeholder
* Upload photo placeholder
* Navigation instructions placeholder

**Links**

* `/adventure/dashboard`

---

# 4. Guide Pages

## 4.1 `/guide/dashboard`

**Sections**

* Upcoming tours placeholder
* Stats placeholder
* Add new adventure placeholder

**Links**

* `/guide/profile`
* `/guide/local`
* `/guide/earnings`
* `/marketplace`

---

## 4.2 `/guide/profile`

**Sections**

* Bio placeholder
* Reviews placeholder

**Links**

* `/guide/dashboard`

---

## 4.3 `/guide/local`

**Sections**

* Tour listing placeholder
* Add/edit tour placeholder

**Links**

* `/guide/dashboard`

---

## 4.4 `/guide/earnings`

**Sections**

* Total earnings placeholder
* Withdraw placeholder

**Links**

* `/guide/dashboard`

---

# 5. Marketplace Pages

## 5.1 `/marketplace` — Marketplace Listing Page

**Sections**

* List of adventures placeholder
* Filters placeholder

**Links**

* `/adventure/details`
* `/guide/dashboard`
* `/adventure/dashboard`

---

# Recommended Folder Structure

```
app/
  about/
  privacy/
  signup/
  signin/
  social-signup/
  <!-- social-signin/ -->
  forgot-password/
  reset-password/
  activate/

  adventure/
    dashboard/
    profile/
    details/
    log/
    active/

  guide/
    dashboard/
    profile/
    local/
    earnings/

  marketplace/
```
