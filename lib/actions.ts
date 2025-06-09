"use server"

import { z } from "zod"

// Define schema for Kundli form validation
const kundliFormSchema = z.object({
  language: z.enum(["english", "hindi"]),
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  gender: z.enum(["male", "female", "other"]),
  birthDay: z.string(),
  birthMonth: z.string(),
  birthYear: z.string(),
  birthHour: z.string(),
  birthMinute: z.string(),
  country: z.string(),
  city: z.string().min(2, { message: "City must be at least 2 characters" }),
})

export type KundliFormData = z.infer<typeof kundliFormSchema>

export async function submitKundliForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      language: formData.get("language") as string,
      name: formData.get("name") as string,
      gender: formData.get("gender") as string,
      birthDay: formData.get("birthDay") as string,
      birthMonth: formData.get("birthMonth") as string,
      birthYear: formData.get("birthYear") as string,
      birthHour: formData.get("birthHour") as string,
      birthMinute: formData.get("birthMinute") as string,
      country: formData.get("country") as string,
      city: formData.get("city") as string,
    }

    // Validate form data
    const validatedData = kundliFormSchema.safeParse(data)

    if (!validatedData.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validatedData.error.flatten().fieldErrors,
      }
    }

    // In a real application, you would store this data in a database
    // For now, we'll just log it and return success
    console.log("Kundli form data:", validatedData.data)

    // Here you would typically:
    // 1. Save to database
    // 2. Generate the actual Kundli chart
    // 3. Return the chart data or a reference to it

    return {
      success: true,
      message: "Kundli data submitted successfully",
      data: validatedData.data,
      // You would include the generated chart or a reference to it here
      chartId: `kundli-${Date.now()}`,
    }
  } catch (error) {
    console.error("Error submitting Kundli form:", error)
    return {
      success: false,
      message: "An unexpected error occurred",
    }
  }
}

// Define schema for consultation form validation
const consultationFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
  lastName: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().optional(),
  birthDate: z.string().optional(),
  birthTime: z.string().optional(),
  birthPlace: z.string().optional(),
  questions: z.string().optional(),
})

export type ConsultationFormData = z.infer<typeof consultationFormSchema>

export async function submitConsultationForm(formData: FormData) {
  try {
    // Extract form data
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      birthDate: formData.get("birthDate") as string,
      birthTime: formData.get("birthTime") as string,
      birthPlace: formData.get("birthPlace") as string,
      questions: formData.get("questions") as string,
    }

    // Validate form data
    const validatedData = consultationFormSchema.safeParse(data)

    if (!validatedData.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validatedData.error.flatten().fieldErrors,
      }
    }

    // In a real application, you would store this data in a database
    console.log("Consultation form data:", validatedData.data)

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Notify astrologer of new booking

    return {
      success: true,
      message: "Consultation request submitted successfully",
      data: validatedData.data,
      bookingId: `booking-${Date.now()}`,
    }
  } catch (error) {
    console.error("Error submitting consultation form:", error)
    return {
      success: false,
      message: "An unexpected error occurred",
    }
  }
}
