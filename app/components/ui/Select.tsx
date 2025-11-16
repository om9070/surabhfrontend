import * as Select from '@radix-ui/react-select';
import { Check, ChevronDown } from 'lucide-react';
import { cn } from "@/lib/utils";

interface CustomSelectProps {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  width?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Please select",
  width = "w-full"
}) => {
  const isPlaceholder = value === "";

  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        className={cn(
          `inline-flex items-center justify-between px-2 py-2 bg-white border-b-2 border-[#aeaeae] text-xs ${width}`, // Apply width here
          isPlaceholder ? 'text-[#aeaeae]' : 'text-black',
          'focus:outline-none focus:ring-0 focus:border-primary'
        )}
        aria-label="Select"
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="ml-2">
          <ChevronDown className="w-4 h-4 text-[#aeaeae]" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Content className="z-10 bg-white border border-[#aeaeae] rounded-md w-[100px]">
        <Select.Viewport className="p-2 bg-gray-50">
          {options.map((option) => (
            <Select.Item
              key={option.value}
              value={option.value}
              className={cn(
                'relative cursor-pointer select-none px-2 py-2 rounded-md text-center text-xs',
                value === option.value ? 'text-black' : 'text-black',
                'hover:bg-gray-200 hover:text-black',
                'focus:bg-primary-light focus:text-black'
              )}
            >
              <Select.ItemText>{option.label}</Select.ItemText>
              {value === option.value && (
                <Select.ItemIndicator className="absolute left-0 inset-y-0 flex items-center pl-2">
                  <Check className="w-4 h-4 text-black" />
                </Select.ItemIndicator>
              )}
            </Select.Item>
          ))}
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};
