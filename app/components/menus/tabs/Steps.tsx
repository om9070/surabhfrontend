import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface StepData {
    key: string;
    label: string | React.ReactNode;
    content: React.ReactNode;
}

interface StepsProps {
    steps: StepData[];
}

const Steps: React.FC<StepsProps> = ({ steps }) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNextStep = () => {
        if (activeStep < steps.length - 1) {
            setActiveStep(activeStep + 1);
        }
    };

    const handlePreviousStep = () => {
        if (activeStep > 0) {
            setActiveStep(activeStep - 1);
        }
    };

    return (
        <div className="flex flex-col md:gap-4 mx-2">
            {/* Step indicator */}
            <div className="relative flex justify-between items-center md:px-20">
                {/* Full width gray underline */}
                <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gray"></div>

                {steps.map((step, index) => (
                    <div
                        key={step.key}
                        className="flex flex-col items-center"
                    >
                        <div className="flex items-center gap-2">
                            {/* Step Number Circle */}
                            <span className={`flex items-center justify-center text-xs h-4 w-4 md:w-6 md:h-6 rounded-full text-white font-bold ${index <= activeStep ? 'bg-blue' : 'bg-gray'}`}>
                                {index + 1}
                            </span>

                            {/* Step Label */}
                            <span className={`md:text-sm text-xs ${index <= activeStep ? 'text-black' : 'text-gray'}`}>
                                {step.label}
                            </span>
                        </div>

                        {/* Blue underline for the active step, placed below */}
                        {index === activeStep && <div className="w-full h-[4px] bg-blue mt-2"></div>}
                    </div>
                ))}
            </div>

            {/* Active content */}
            <div className="flex-grow mt-4">
                {steps[activeStep].content}
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between mt-4">
                {/* Conditionally render the Back button */}
                {activeStep > 0 ? (
                    <button
                        className="py-2 px-4 flex bg-blue text-white hover:bg-blue-light"
                        onClick={handlePreviousStep}
                    >
                        <span className='mt-1 text-sm'><FaChevronLeft /></span>
                        <span className='font-semibold text-sm'>Back</span>
                    </button>
                ) : (
                    <div className="w-20" />
                )}

                {/* Conditionally render the Next button */}
                {activeStep < steps.length - 1 ? (
                    <button
                        className="py-2 px-4 flex bg-blue text-white hover:bg-blue-light"
                        onClick={handleNextStep}
                    >
                        <span className='font-semibold text-sm'>Next</span>
                        <span className='text-sm mt-1'><FaChevronRight /></span>
                    </button>
                ) : (
                    <div className="w-20" />
                )}
            </div>


        </div>
    );
};

export default Steps;
