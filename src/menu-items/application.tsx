// third-party
import { FormattedMessage } from 'react-intl';
import { NavItemType } from 'types';

// assets
import {
    IconApps,
    IconUserCheck,
    IconBasket,
    IconFileInvoice,
    IconMessages,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc,
    IconSettings2,
    IconSettingsAutomation,
    IconBrandAlipay,
    IconHelp,
    IconUsers,
    IconPageBreak,
    IconSubscript,
    IconBuildingSkyscraper,
    IconBuildingBank
} from '@tabler/icons-react';

// constant
const icons = {
    IconApps,
    IconUserCheck,
    IconBasket,
    IconFileInvoice,
    IconMessages,
    IconLayoutKanban,
    IconMail,
    IconCalendar,
    IconNfc,
    IconSettings2,
    IconSettingsAutomation,
    IconBrandAlipay,
    IconHelp,
    IconUsers,
    IconPageBreak,
    IconSubscript,
    IconBuildingSkyscraper,
    IconBuildingBank
};

// ==============================|| MENU ITEMS - APPLICATION ||============================== //

const application: NavItemType = {
    id: 'application',
    title: <FormattedMessage id="application" />,
    icon: icons.IconApps,
    type: 'group',
    children: [
        {
            id: 'jobs',
            title: <FormattedMessage id="jobs" />,
            type: 'collapse',
            icon: icons.IconBasket,
            children: [
                {
                    id: 'job-list',
                    title: <FormattedMessage id="job-list" />,
                    type: 'item',
                    // link: './views/Jobs/JobList',
                    url: '/jobs/job-list',
                    breadcrumbs: false
                },
                {
                    id: 'industry',
                    title: <FormattedMessage id="industry" />,
                    type: 'item',
                    url: '/superadmin/industry-type',
                    breadcrumbs: false
                },
                {
                    id: 'job-category',
                    title: <FormattedMessage id="job-category" />,
                    type: 'item',
                    url: '/superadmin/job-category',
                    breadcrumbs: false
                },
                {
                    id: 'job-title',
                    title: <FormattedMessage id="job-title" />,
                    type: 'item',
                    url: '/settings/job-title',
                    breadcrumbs: false
                },
                {
                    id: 'job-type',
                    title: <FormattedMessage id="job-type" />,
                    type: 'item',
                    url: '/settings/job-type',
                    breadcrumbs: false
                },
                {
                    id: 'work-mode',
                    title: <FormattedMessage id="work-mode" />,
                    type: 'item',
                    url: '/settings/work-modes',
                    breadcrumbs: false
                },
                {
                    id: 'skills',
                    title: <FormattedMessage id="skills" />,
                    type: 'item',
                    url: '/settings/skills',
                    breadcrumbs: false
                }
            ]
        },
        {
            id: 'job-seeker',
            title: <FormattedMessage id="job-seeker" />,
            type: 'collapse',
            icon: icons.IconUsers,
            children: [
                {
                    id: 'job-seeker-list',
                    title: <FormattedMessage id="job-seeker-list" />,
                    type: 'item',
                    url: '/jobSeekers/job-seeker-list'
                }
            ]
        },
        {
            id: 'employer',
            title: <FormattedMessage id="employer" />,
            type: 'collapse',
            icon: icons.IconSettings2,
            children: [
                {
                    id: 'employer-list',
                    title: <FormattedMessage id="employer-list" />,
                    type: 'item',
                    url: '/employers/employer-list'
                }
            ]
        },

        //     ]
        // },
        {
            id: 'help-suppoert',
            title: <FormattedMessage id="help-suppoert" />,
            type: 'collapse',
            icon: icons.IconHelp,
            children: [
                // {

                {
                    id: 'employer-ticket',
                    title: <FormattedMessage id="employer-ticket" />,
                    type: 'item',
                    url: '/settings/employer/ticket',
                    breadcrumbs: false
                },
                {
                    id: 'jobseeker-ticket',
                    title: <FormattedMessage id="jobseeker-ticket" />,
                    type: 'item',
                    url: '/settings/jobseeker/ticket',
                    breadcrumbs: false
                }
            ]
        },
        // {

        {
            id: 'country',
            title: <FormattedMessage id="country" />,
            type: 'item',
            url: '/settings/country',
            icon: icons.IconBuildingBank,
            breadcrumbs: false
        },
        {
            id: 'state',
            title: <FormattedMessage id="state" />,
            type: 'item',
            url: '/settings/state',
            icon: icons.IconBuildingSkyscraper,
            breadcrumbs: false
        },
        {
            id: 'city',
            title: <FormattedMessage id="city" />,
            type: 'item',
            url: '/settings/city',
            icon: icons.IconBuildingSkyscraper,
            breadcrumbs: false
        },

        {
            id: 'language',
            title: <FormattedMessage id="language" />,
            type: 'item',
            url: '/settings/languages',
            icon: icons.IconBrandAlipay,
            breadcrumbs: false
        },
        {
            id: 'brands',
            title: <FormattedMessage id="Featured/Trusted" />,
            type: 'item',
            url: '/settings/cms/brand',
            icon: icons.IconBrandAlipay,
            breadcrumbs: false
        },
        {
            id: 'email',
            title: <FormattedMessage id="email" />,
            type: 'item',
            icon: icons.IconMail,
            url: '/settings/email-template',
            breadcrumbs: false
        },
        {
            id: 'pages',
            title: <FormattedMessage id="pages" />,
            type: 'item',
            icon: icons.IconPageBreak,
            url: '/settings/cms/pages',
            breadcrumbs: false
        },
        {
            id: 'organization-settings',
            title: <FormattedMessage id="organization-settings" />,
            type: 'item',
            icon: icons.IconSettings2,
            url: '/settings/cms/organization-settings',
            breadcrumbs: false
        },
        {
            id: 'testimonials',
            title: <FormattedMessage id="testimonials" />,
            type: 'item',
            icon: icons.IconUserCheck,
            url: '/settings/cms/testimonials',
            breadcrumbs: false
        },
        {
            id: 'blogs',
            title: <FormattedMessage id="blogs" />,
            type: 'item',
            icon: icons.IconUsers,
            url: '/settings/cms/blogs',
            breadcrumbs: false
        },
        {
            id: 'user-management',
            title: <FormattedMessage id="user-management" />,
            type: 'collapse',
            icon: icons.IconUsers,
            children: [
                {
                    id: 'roles',
                    title: <FormattedMessage id="roles" />,
                    type: 'item',
                    url: '/settings/roles',
                    breadcrumbs: false
                },
                {
                    id: 'users',
                    title: <FormattedMessage id="users" />,
                    type: 'item',
                    url: '/settings/users',
                    breadcrumbs: false
                }
            ]
        }
        // {
        //     id: 'customer',
        //     title: <FormattedMessage id="customer" />,
        //     type: 'collapse',
        //     icon: icons.IconBasket,
        //     children: [
        //         {
        //             id: 'customer-list',
        //             title: <FormattedMessage id="customer-list" />,
        //             type: 'item',
        //             url: '/apps/customer/customer-list'
        //         },
        //         {
        //             id: 'order-list',
        //             title: <FormattedMessage id="order-list" />,
        //             type: 'item',
        //             url: '/apps/customer/order-list'
        //         },
        //         {
        //             id: 'create-invoice',
        //             title: <FormattedMessage id="create-invoice" />,
        //             type: 'item',
        //             url: '/apps/customer/create-invoice',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'order-details',
        //             title: <FormattedMessage id="order-details" />,
        //             type: 'item',
        //             url: '/apps/customer/order-details'
        //         },
        //         {
        //             id: 'product',
        //             title: <FormattedMessage id="product" />,
        //             type: 'item',
        //             url: '/apps/customer/product'
        //         },
        //         {
        //             id: 'product-review',
        //             title: <FormattedMessage id="product-review" />,
        //             type: 'item',
        //             url: '/apps/customer/product-review',
        //             breadcrumbs: false
        //         }
        //     ]
        // },
        // {
        //     id: 'chat',
        //     title: <FormattedMessage id="chat" />,
        //     type: 'item',
        //     icon: icons.IconMessages,
        //     url: '/apps/chat'
        // },
        // {
        //     id: 'kanban',
        //     title: 'Kanban',
        //     type: 'item',
        //     icon: icons.IconLayoutKanban,
        //     link: '/apps/kanban/:tab',
        //     url: '/apps/kanban/board',
        //     breadcrumbs: false
        // },
        // {
        //     id: 'mail',
        //     title: <FormattedMessage id="mail" />,
        //     type: 'item',
        //     icon: icons.IconMail,
        //     url: '/apps/mail'
        // },
        // {
        //     id: 'calendar',
        //     title: <FormattedMessage id="calendar" />,
        //     type: 'item',
        //     url: '/apps/calendar',
        //     icon: icons.IconCalendar
        // },
        // {
        //     id: 'contact',
        //     title: <FormattedMessage id="contact" />,
        //     type: 'collapse',
        //     icon: icons.IconNfc,
        //     children: [
        //         {
        //             id: 'c-card',
        //             title: <FormattedMessage id="cards" />,
        //             type: 'item',
        //             url: '/apps/contact/c-card',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'c-list',
        //             title: <FormattedMessage id="list" />,
        //             type: 'item',
        //             url: '/apps/contact/c-list',
        //             breadcrumbs: false
        //         }
        //     ]
        // },
        // {
        //     id: 'e-commerce',
        //     title: <FormattedMessage id="e-commerce" />,
        //     type: 'collapse',
        //     icon: icons.IconBasket,
        //     children: [
        //         {
        //             id: 'products',
        //             title: <FormattedMessage id="products" />,
        //             type: 'item',
        //             url: '/apps/e-commerce/products'
        //         },
        //         {
        //             id: 'product-details',
        //             title: <FormattedMessage id="product-details" />,
        //             type: 'item',
        //             link: '/apps/e-commerce/product-details/:id',
        //             url: '/apps/e-commerce/product-details/1',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'product-list',
        //             title: <FormattedMessage id="product-list" />,
        //             type: 'item',
        //             url: '/apps/e-commerce/product-list'
        //         },
        //         {
        //             id: 'checkout',
        //             title: <FormattedMessage id="checkout" />,
        //             type: 'item',
        //             url: '/apps/e-commerce/checkout'
        //         }
        //     ]
        // },
        // {
        //     id: 'invoice',
        //     title: <FormattedMessage id="invoice" />,
        //     type: 'collapse',
        //     icon: icons.IconFileInvoice,
        //     children: [
        //         {
        //             id: 'invoice-dashboard',
        //             title: <FormattedMessage id="dashboard" />,
        //             type: 'item',
        //             url: '/apps/invoice/dashboard',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'create-invoice',
        //             title: <FormattedMessage id="create" />,
        //             type: 'item',
        //             url: '/apps/invoice/create-invoice',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'invoice-list',
        //             title: <FormattedMessage id="list" />,
        //             type: 'item',
        //             url: '/apps/invoice/invoice-list'
        //         },
        //         {
        //             id: 'edit-invoice',
        //             title: <FormattedMessage id="edit" />,
        //             type: 'item',
        //             url: '/apps/invoice/edit-invoice'
        //         },
        //         {
        //             id: 'invoice-deatils',
        //             title: <FormattedMessage id="details" />,
        //             type: 'item',
        //             url: '/apps/invoice/invoice-deatils'
        //         },
        //         {
        //             id: 'client',
        //             title: <FormattedMessage id="client" />,
        //             type: 'collapse',
        //             children: [
        //                 {
        //                     id: 'add-client',
        //                     title: <FormattedMessage id="create" />,
        //                     type: 'item',
        //                     url: '/apps/invoice/client/add-client'
        //                 },
        //                 {
        //                     id: 'client-list',
        //                     title: <FormattedMessage id="list" />,
        //                     type: 'item',
        //                     url: '/apps/invoice/client/client-list'
        //                 }
        //             ]
        //         },
        //         {
        //             id: 'item',
        //             title: <FormattedMessage id="item" />,
        //             type: 'collapse',
        //             children: [
        //                 {
        //                     id: 'add-item',
        //                     title: <FormattedMessage id="create" />,
        //                     type: 'item',
        //                     url: '/apps/invoice/items/add-item'
        //                 },
        //                 {
        //                     id: 'item-list',
        //                     title: <FormattedMessage id="list" />,
        //                     type: 'item',
        //                     url: '/apps/invoice/items/item-list'
        //                 }
        //             ]
        //         },
        //         {
        //             id: 'payment',
        //             title: <FormattedMessage id="payment" />,
        //             type: 'collapse',
        //             children: [
        //                 {
        //                     id: 'add-payment',
        //                     title: <FormattedMessage id="create" />,
        //                     type: 'item',
        //                     url: '/apps/invoice/payment/add-payment'
        //                 },
        //                 {
        //                     id: 'payment-list',
        //                     title: <FormattedMessage id="list" />,
        //                     type: 'item',
        //                     url: '/apps/invoice/payment/payment-list'
        //                 },
        //                 {
        //                     id: 'payment-details',
        //                     title: <FormattedMessage id="details" />,
        //                     type: 'item',
        //                     url: '/apps/invoice/payment/payment-details'
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     id: 'crm',
        //     title: <FormattedMessage id="crm" />,
        //     type: 'collapse',
        //     icon: icons.IconBasket,
        //     children: [
        //         {
        //             id: 'lead-management',
        //             title: <FormattedMessage id="lead-management" />,
        //             type: 'collapse',
        //             children: [
        //                 {
        //                     id: 'lm-overview',
        //                     title: <FormattedMessage id="overview" />,
        //                     type: 'item',
        //                     url: '/apps/crm/lead-management/lm-overview'
        //                 },
        //                 {
        //                     id: 'lm-lead-list',
        //                     title: <FormattedMessage id="lead-list" />,
        //                     type: 'item',
        //                     url: '/apps/crm/lead-management/lm-lead-list'
        //                 }
        //             ]
        //         },

        //         {
        //             id: 'contact-management',
        //             title: <FormattedMessage id="contact-management" />,
        //             type: 'collapse',
        //             children: [
        //                 {
        //                     id: 'cm-contact-card',
        //                     title: <FormattedMessage id="contact-card" />,
        //                     type: 'item',
        //                     url: '/apps/crm/contact-management/cm-contact-card'
        //                 },
        //                 {
        //                     id: 'cm-contact-list',
        //                     title: <FormattedMessage id="contact-list" />,
        //                     type: 'item',
        //                     url: '/apps/crm/contact-management/cm-contact-list'
        //                 },
        //                 {
        //                     id: 'cm-reminders-followup',
        //                     title: <FormattedMessage id="reminders-followup" />,
        //                     type: 'item',
        //                     url: '/apps/crm/contact-management/cm-reminders-followup'
        //                 },
        //                 {
        //                     id: 'cm-communication-history',
        //                     title: <FormattedMessage id="communication-history" />,
        //                     type: 'item',
        //                     url: '/apps/crm/contact-management/cm-communication-history'
        //                 }
        //             ]
        //         },
        //         {
        //             id: 'sales-management',
        //             title: <FormattedMessage id="sales-management" />,
        //             type: 'collapse',
        //             children: [
        //                 {
        //                     id: 'sm-statement',
        //                     title: <FormattedMessage id="statement" />,
        //                     type: 'item',
        //                     url: '/apps/crm/sales-management/sm-statement'
        //                 },
        //                 {
        //                     id: 'sm-refund',
        //                     title: <FormattedMessage id="refund" />,
        //                     type: 'item',
        //                     url: '/apps/crm/sales-management/sm-refund'
        //                 },
        //                 {
        //                     id: 'sm-earning',
        //                     title: <FormattedMessage id="earning" />,
        //                     type: 'item',
        //                     url: '/apps/crm/sales-management/sm-earning'
        //                 }
        //             ]
        //         }
        //     ]
        // }
    ]
};

export default application;
