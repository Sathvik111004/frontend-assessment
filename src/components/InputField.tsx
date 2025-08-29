import React, { useState } from 'react'

export interface InputFieldProps {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  variant?: 'outlined' | 'filled' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  helperText?: string
  clearable?: boolean
  disabled?: boolean
  invalid?: boolean
  errorMessage?: string
  type?: string
  passwordToggle?: boolean
}

export function InputField({
  label,
  value,
  onChange,
  placeholder,
  variant = 'outlined',
  size = 'md',
  helperText,
  clearable,
  disabled,
  invalid,
  errorMessage,
  type = 'text',
  passwordToggle,
}: InputFieldProps) {
  const [showPassword, setShowPassword] = useState(false)

  const inputType =
    passwordToggle && type === 'password'
      ? showPassword
        ? 'text'
        : 'password'
      : type

  const sizeClasses =
    size === 'sm'
      ? 'px-2 py-1 text-sm'
      : size === 'lg'
      ? 'px-4 py-2 text-lg'
      : 'px-3 py-2 text-base'

  const variantClasses =
    variant === 'filled'
      ? 'bg-gray-100 border-transparent focus:bg-white'
      : variant === 'ghost'
      ? 'border-transparent focus:border-gray-400'
      : 'border-gray-300'

  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-200">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <input
          className={`flex-1 rounded border outline-none focus:ring-2 focus:ring-blue-500 ${sizeClasses} ${variantClasses}`}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={invalid || !!errorMessage}
          type={inputType}
        />
        {clearable && value && (
          <button
            type="button"
            className="text-gray-500 hover:text-gray-800"
            onClick={() =>
              onChange({
                target: { value: '' },
              } as React.ChangeEvent<HTMLInputElement>)
            }
          >
            ✕
          </button>
        )}
        {passwordToggle && type === 'password' && (
          <button
            type="button"
            className="text-gray-500 hover:text-gray-800"
            onClick={() => setShowPassword(p => !p)}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>
      {(helperText || errorMessage) && (
        <span
          className={`text-xs ${
            errorMessage || invalid ? 'text-red-500' : 'text-gray-500'
          }`}
          role={errorMessage || invalid ? 'alert' : undefined}
        >
          {errorMessage || helperText}
        </span>
      )}
    </div>
  )
}
