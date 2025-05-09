import { motion, AnimatePresence } from "motion/react";
import { useState, MouseEvent } from "react";
import Checkmark from "./Icons/Checkmark";
import { useFormAndValidation } from "../hooks/useFormAndValidation";

interface FormState {
    currentState: "idle" | "pending" | "success" | "error";
    errorMessage: string | null;
}

const buttonStateClasses = {
    idle: "bg-primary-700 opacity-100",
    pending: "bg-primary-700 opacity-50",
    success: "bg-green opacity-100",
    error: "bg-red opacity-100",
};

export default function FrequentTraveler() {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const [formState, setFormState] = useState<FormState>({
        currentState: "idle",
        errorMessage: null,
    });

    const { values, errors, isValid, handleChange, resetForm } = useFormAndValidation({
        fullName: "",
        emailAddress: ""
    });

    // more info form submission
    function handleSubmit(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        if (isChecked && isValid) {
            // form submission and reset
            setFormState({ currentState: "success", errorMessage: null });

            setTimeout(() => 
                setFormState({ currentState: "idle", errorMessage: null }), 
                2000
            );

            resetForm();

        }
    }

    return (
        <section className="bg-primary-100 px-24 py-36">
            <div className="border-y-grey-500/40 m-auto flex max-w-389 items-center justify-between gap-x-28 border-y-1 py-26">
                <div className="basis-150 text-center">
                    <h3 className="tracking-6 mb-9.5 text-[1.75rem]/14 font-semibold">Learn About Our Frequent Traveler Program</h3>
                    <p className="text-grey-800 text-base/13.5">
                        Interesed in saving up to $1000 on your next vacation?
                        How about earning travel points that can be converted into rewards like extra nights,
                        free meals, and exclusive offers from resorts from around the globe?
                    </p>
                </div>
                <div className="bg-grey-500/40 self-stretch block w-0.25" />
                <form className="flex flex-col basis-150">

                    <label className="mb-8">
                        <p className="tracking-6 mb-3 text-lg/9.5">Full Name</p>
                        <input
                            required
                            type="text"
                            name="fullName"
                            value={values.fullName}
                            onChange={handleChange}
                            minLength={2}
                            maxLength={50}
                            placeholder="John Smith"
                            className={`placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity:50 ${errors.fullName && "outline-red"}`}
                        />
                        <AnimatePresence>
                            {errors.fullName && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.15 }}
                                    className="text-red pt-1 pl-0.5 text-sm">
                                    {errors.fullName}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </label>
                    
                    <label className="mb-8">
                        <p className="tracking-6 mb-3 text-lg/9.5">Email</p>
                        <input
                            required
                            type="email"
                            name="emailAddress"
                            value={values.emailAddress}
                            onChange={handleChange}
                            minLength={3}
                            maxLength={50}
                            placeholder="johnsmith@email.com"
                            className={`placeholder:text-grey-400 w-full rounded-lg bg-white py-3.5 pl-4 transition-all duration-200 placeholder:font-light focus:outline-1 disabled:opacity:50 ${errors.emailAddress && "outline-red"}`}
                        />
                        <AnimatePresence>
                            {errors.emailAddress && (
                                <motion.p
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.15 }}
                                    className="text-red pt-1 pl-0.5 text-sm">
                                    {errors.emailAddress}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </label>
                    <div className="flex flex-wrap items-center justify-between gap-8">
                        <label className="text-grey-800 flex cursor-pointer items-center gap-x-1.5">
                            <button
                                className="flex size-5 cursor-pointer items-center justify-center rounded-xs bg-white p-1 disabled:opacity-50"
                                type="button"
                                onClick={() => setIsChecked(!isChecked)}
                            >
                                <Checkmark
                                    className={`size-2 transition-all duration-200 ${isChecked ? "visible size-3 opacity-100" : "invisible size-2 opacity-0"}`}
                                />
                            </button>
                            <p className="text-sm tracking-[.03rem]">Agree to receive promotional email updates</p>
                        </label>
                        <button
                            className={`enabled:hover:bg-primary-800 cursor-pointer rounded-[0.625rem] px-8 py-3.5 font-medium text-white transition-all duration-200 disabled:cursor-not-allowed ${buttonStateClasses[formState.currentState]}`}
                            onClick={handleSubmit}
                            disabled={formState.currentState !== "idle"}
                        >
                            {formState.currentState === "idle" && "Learn More"}
                            {formState.currentState === "pending" && "Submitting..."}
                            {formState.currentState === "success" && "Success!"}
                            {formState.currentState === "error" && "Submission Failed"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
