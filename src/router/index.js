import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import LoginForm from "@/components/LoginForm.vue";
import RegistrationForm from "@/views/RegistrationForm.vue";
import JoinGroup from "@/components/JoinGroup.vue";
import LeaveGroup from "@/components/LeaveGroup.vue";import StudyGroupNavBar from "@/components/StudyGroupNavBar.vue";
import TheStudyGroupPage from "@/views/TheStudyGroupPage.vue";
import TheHomePage from "@/views/TheHomePage.vue";
import StudyGroupWidget from "@/components/StudyGroupWidget.vue";
import TheNavPage from "@/views/TheNavPage.vue";
import TheCreateGroupPage from "@/views/TheCreateGroupPage.vue";
import TheVisitorStudyGroup from "@/views/TheVisitorStudyGroup.vue";
import ReviewRequest from '@/components/ReviewRequest.vue'
import RequestPage from '@/views/RequestPage.vue'
import FilesPage from '@/views/FilesPage.vue'
import FilesTable from "@/components/FilesTable.vue"
import Notification from "@/components/Notification.vue"
import LoginPage from "@/views/LoginPage.vue";
import CreateAccountOne from "@/views/CreateAccountOne.vue";
import CreateAccountTwo from "@/views/CreateAccountTwo.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import EmailSent from "@/views/EmailSent.vue";
import EnterNewPassword from "@/views/EnterNewPassword.vue";
import ResetComplete from "@/views/ResetComplete.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import UserProfilePage from "@/views/UserProfilePage.vue";
import PreferencesPage from "@/views/PreferencesPage.vue";
import ResetPassword from "@/components/ResetPassword.vue";
import ResetPasswordPage from "@/views/ResetPasswordPage.vue";
import BrowseGroupsPage from '@/views/BrowseGroupsPage.vue'

const routes = [
  {
    path: "/resetpassword",
    name: "Reset Password",
    component: ResetPasswordPage,
  },
  {
    path: "/preferences",
    name: "Preferences",
    component: PreferencesPage,
  },
  {
    path: "/userprofile",
    name: "User Profile",
    component: UserProfilePage,
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfilePage,
  },
  {
    path: "/resetcomplete",
    name: "Password Reset Complete",
    component: ResetComplete,
  },
  {
    path: "/enternewpassword",
    name: "Enter New Password",
    component: EnterNewPassword,
  },
  {
    path: "/emailsent",
    name: "Email Sent!",
    component: EmailSent,
  },
  {
    path: "/forgotpassword",
    name: "Forgot Password",
    component: ForgotPassword,
  },
  {
    path: "/createaccount2",
    name: "Create an Account (2)",
    component: CreateAccountTwo,
  },
  {
    path: "/createaccount1",
    name: "Create an Account (1)",
    component: CreateAccountOne,
  },
  {
    path: "/login",
    name: "Log In",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "Sign Up",
    component: RegistrationForm,
  },
//   {
//     path: "/",
//     name: "testing",
//     component: testing
//  },
  // {
  // //   path: "/home",
  // //   name: "Home",
  // //   component: TestPage,
  // // },
  {
    path: "/browsegroups",
    name: "Browse Groups",
    component: BrowseGroupsPage
  },
  {
    path: "/TheHomePage",
    name: "TheHomePage",
    component: TheHomePage,
  },
  {
    path: "/TheCreateGroupPage",
    name: "TheCreateGroupPage",
    component: TheCreateGroupPage,
  },
  {
    path: "/TheStudyGroupPage/:groupName",
    name: "/TheStudyGroupPage/:groupName",
    component: TheStudyGroupPage,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
