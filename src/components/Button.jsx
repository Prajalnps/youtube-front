import { cva } from "class-variance-authority"
import { twMerge } from "tailwind-merge"

//takes in two parameter based on the variety of the button
/*
1st: array of class you add to every button we create
2nd: object, takes a variants property, determines what keys we want to be able to set
*/
const buttonStyles = cva(["transition-colors"], {
    variants: {
        variant: {
            default: [
                "bg-secondary",
                "hover:bg-secondary-hover"
            ],
            ghost: [
                "hover:bg-gray-100"
            ]
        },
        size: {
            //specify all the diff type of sizes
            default: [
                "rounded",
                "p-2"
            ],
            icon: [
                "rounded-full",
                "w-10",
                "h-10",
                "flex",
                "items-center",
                "justify-center",
                "p-2.5",
            ]
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})

// type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export default function Button({ variant, size, className, ...props }) {
    const mergedClassName = twMerge(buttonStyles({ variant, size }), className)
    return <button {...props} className={mergedClassName} /> //over riding button styles with custom styles
}