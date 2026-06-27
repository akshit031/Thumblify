import type { IPricing } from "../types";

export const pricingData: IPricing[] = [
    {
        name: "Basic",
        price: 99,
        period: "month",
        features: [
            "50 AI Thumbnails/month",
            "Basic Templates",
            "Standard Resolution",
            "No Watermark",
            "Email Support"
        ],
        mostPopular: false
    },
    {
        name: "Pro",
        price: 199,
        period: "month",
        features: [
            "Unlimited AI Thumbnails",
            "Premium Templates",
            "4K Resolution",
            "Watermark Free",
            "Custom Fonts",
            "Priority Support"
        ],
        mostPopular: true
    },
    {
        name: "Enterprise",
        price: 299,
        period: "month",
        features: [
            "Everything in Pro",
            "API Access",
            "Dedicated Account Manager",
            "Custom Branding",
            "Team Collaboration",
        ],
        mostPopular: false
    }
];