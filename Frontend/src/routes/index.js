import SingleHotel from "../components/Hotel/SingleHotel";
import Dashboard from "../components/admin/Dashboard";
import Checkout from "../components/checkout/Checkout";
import Home from "../components/home/Home";
import SearchAndFilter from "../components/home/SearchAndFilter";
import HotelDetails from "../components/hotel/HotelDetails";
import NotFound from "../components/notfound/404";
import Login from "../components/user/Login";
import Signup from "../components/user/Signup";
import ForgotPassword from "../components/user/ForgotPassword";
import ResetPassword from "../components/user/ResetPassword";
import ChangePassword from "../components/user/passwordChangeModal";
import Profile from "../components/user/userProfile";
import Booking from "../components/user/myBooking";
import HotelsList from "../components/admin/HotelsList";
import CheckoutSuccess from "../components/checkout/CheckoutSuccess";
import AddHotel from "../components/admin/AddHotel";
import AllTransactions from "../components/admin/AllTransactions";

const homePage = {
    name: "Home",
    path: "/",
    component: Home
}

const loginPage = {
    name: "Login",
    path: "/login",
    component: Login
}

const signUpPage = {
    name: "Sign Up",
    path: "/signup",
    component: Signup
}

const hotelDetailsPage = {
    name: "Hotel Details",
    path: "/hoteldetails/:id",
    component: HotelDetails
}

const checkOutPage = {
    name: "Check Out",
    path: "/checkout",
    component: Checkout
}

const notFoundPage = {
    name: "Not Found",
    path: "*",
    component: NotFound
}

const DashboardPage = {
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard
}

const profilePage = {
    name: "Profile Page",
    path: "/profile",
    component: Profile
}

const changePassword = {
    name: "Change Password",
    path: "/password",
    component: ChangePassword
}

const searchAndFilterPage = {
    name: "Search and Filter",
    path: "/search/:keyword",
    component: SearchAndFilter
}

const myBookingPage = {
    name: "My Booking",
    path: "/booking",
    component: Booking
}

const searchandFilterPage = {
     name: "Search and Filter",
     path: "/search/:keyword",
     component: SearchAndFilter
}

const hotelsListPage = {
    name: "Hotels List",
    path: "/admin/hotels",
    component: HotelsList
}

const checkoutSuccessPage = {
    name: "Checkout Success",
    path: "/payment/completed",
    component: CheckoutSuccess
}

const forgotPasswordPage = {
    name: "Forgot Password",
    path: "/admin/forgotpassword",
    component: ForgotPassword
}

const ResetPasswordPage = {
    name: "Reset Password",
    path: "/resetpassword/:email",
    component: ResetPassword
}

const addHotelPage = {
    name: "Add Hotel",
    path: "/admin/add-hotel",
    component: AddHotel
}

const allTransactionsPage = {
    name: "All Transactions",
    path: "/admin/all-transactions",
    component: AllTransactions
}

export const basicRoutes = [
    homePage,
    loginPage,
    signUpPage,
    hotelDetailsPage,
    notFoundPage,
    searchAndFilterPage,
    myBookingPage,
    forgotPasswordPage,
    myBookingPage


];

export const userRoutes = [
    profilePage,
    changePassword,
    myBookingPage,
    searchandFilterPage,
    checkOutPage,
    checkoutSuccessPage,
    ResetPasswordPage,

];

export const adminRoutes = [
    DashboardPage,
    hotelsListPage,
    hotelsListPage,
    addHotelPage,
    allTransactionsPage
]
