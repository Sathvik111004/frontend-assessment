import type { Meta, StoryObj } from '@storybook/react'
import { InputField } from '../components/InputField'
import React, { useState } from 'react'

const meta: Meta<typeof InputField> = {
title: 'Components/InputField',
component: InputField,
args: {
label: 'Label',
placeholder: 'Type here',
helperText: 'Helper text'
}
}
export default meta
type Story = StoryObj<typeof InputField>

export const Variants: Story = {
render: (args) => (
<div className="space-y-4">
<InputField {...args} variant="outlined" />
<InputField {...args} variant="filled" />
<InputField {...args} variant="ghost" />
</div>
)
}

export const Sizes: Story = {
render: (args) => (
<div className="space-y-4">
<InputField {...args} size="sm" />
<InputField {...args} size="md" />
<InputField {...args} size="lg" />
</div>
)
}

export const Controlled: Story = {
render: () => {
const [val, setVal] = useState('')
return <InputField label="Search" value={val} onChange={e => setVal(e.target.value)} clearable />
}
}

export const States: Story = {
args: { value: 'Hello' },
render: (args) => (
<div className="space-y-4">
<InputField {...args} disabled />
<InputField {...args} invalid errorMessage="Required field" />
<InputField {...args} passwordToggle type="password" />
</div>
)
}