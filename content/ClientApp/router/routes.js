import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";
// Admin pages
var Dashboard = function () { return import("@/pages/Dashboard.vue"); };
var Profile = function () { return import("@/pages/Profile.vue"); };
var Notifications = function () { return import("@/pages/Notifications.vue"); };
var Icons = function () { return import("@/pages/Icons.vue"); };
var Maps = function () { return import("@/pages/Maps.vue"); };
var Typography = function () { return import("@/pages/Typography.vue"); };
var TableList = function () { return import("@/pages/TableList.vue"); };
var routes = [
    {
        path: "/",
        component: DashboardLayout,
        redirect: "/dashboard",
        children: [
            {
                path: "dashboard",
                name: "dashboard",
                component: Dashboard
            },
            {
                path: "profile",
                name: "profile",
                component: Profile
            },
            {
                path: "notifications",
                name: "notifications",
                component: Notifications
            },
            {
                path: "icons",
                name: "icons",
                component: Icons
            },
            {
                path: "maps",
                name: "maps",
                component: Maps
            },
            {
                path: "typography",
                name: "typography",
                component: Typography
            },
            {
                path: "table-list",
                name: "table-list",
                component: TableList
            }
        ]
    },
    { path: "*", component: NotFound },
];
export default routes;
