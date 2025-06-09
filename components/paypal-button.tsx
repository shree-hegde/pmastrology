"use client"

import { useEffect, useState } from "react"
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js"
import { useToast } from "@/hooks/use-toast"

interface PayPalButtonProps {
  amount: string
  currency: string
  showSpinner?: boolean
  onSuccess?: (details: any) => void
}

export function PayPalButton({ amount, currency, showSpinner = true, onSuccess }: PayPalButtonProps) {
  const { toast } = useToast()
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    setScriptLoaded(true)
  }, [])

  const handleCreateOrder = (data: any, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
            currency_code: currency,
          },
          description: "Astrological Consultation",
        },
      ],
      application_context: {
        shipping_preference: "NO_SHIPPING",
      },
    })
  }

  const handleApprove = (data: any, actions: any) => {
    return actions.order.capture().then((details: any) => {
      toast({
        title: "Payment Successful!",
        description: `Transaction completed by ${details.payer.name.given_name}. Thank you for your payment!`,
      })

      if (onSuccess) {
        onSuccess(details)
      }

      // In a real application, you would:
      // 1. Update your database
      // 2. Send confirmation email
      // 3. Redirect to a thank you page
    })
  }

  const handleError = (err: any) => {
    toast({
      title: "Payment Error",
      description: "There was an error processing your payment. Please try again.",
      variant: "destructive",
    })
    console.error("PayPal error:", err)
  }

  if (!scriptLoaded) {
    return showSpinner ? <div className="py-4 text-center">Loading payment options...</div> : null
  }

  return (
    <PayPalScriptProvider
      options={{
        "client-id": process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID || "test", // Replace with your actual client ID in production
        currency: currency,
        intent: "capture",
      }}
    >
      <PayPalButtons
        style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
        createOrder={handleCreateOrder}
        onApprove={handleApprove}
        onError={handleError}
      />
    </PayPalScriptProvider>
  )
}
