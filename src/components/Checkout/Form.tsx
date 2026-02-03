import Input from "../reusable/Input";

export default function Form(props: any) {
  return (
    <div className="flex flex-col gap-9 items-start px-17.5">
      <h1 className="text-[36px] font-semibold">Billing Details</h1>
      <form className="max-w-112.5 w-full flex flex-col gap-6">
        <div className="flex gap-4 flex-wrap w-full">
          <Input
            id="firstName"
            label="First Name"
            type="text"
            value={props.formData.firstName}
            onChange={props.handleChange}
            error={props.errors.firstName}
            required
          />
          <Input
            id="lastName"
            label="Last Name"
            type="text"
            value={props.formData.lastName}
            onChange={props.handleChange}
            error={props.errors.lastName}
            required
          />
        </div>
        <Input
          id="companyName"
          label="Company Name (Optional)"
          type="text"
          value={props.formData.companyName}
          onChange={props.handleChange}
          error={props.errors.companyName}
        />
        <Input
          id="country"
          label="Country"
          type="text"
          value={props.formData.country}
          onChange={props.handleChange}
          error={props.errors.country}
          required
        />
        <Input
          id="streetAddress"
          label="Street Address"
          type="text"
          value={props.formData.streetAddress}
          onChange={props.handleChange}
          error={props.errors.streetAddress}
          required
        />
        <Input
          id="city"
          label="City"
          type="text"
          value={props.formData.city}
          onChange={props.handleChange}
          error={props.errors.city}
          required
        />
        <Input
          id="province"
          label="Province/State"
          type="text"
          value={props.formData.province}
          onChange={props.handleChange}
          error={props.errors.province}
          required
        />
        <Input
          id="postalCode"
          label="Postal Code (ZIP)"
          type="text"
          value={props.formData.postalCode}
          onChange={props.handleChange}
          error={props.errors.postalCode}
          required
        />
        <Input
          id="phone"
          label="Phone Number"
          type="tel"
          value={props.formData.phone}
          onChange={props.handleChange}
          error={props.errors.phone}
          required
        />
        <Input
          id="email"
          label="Email Address"
          type="email"
          value={props.formData.email}
          onChange={props.handleChange}
          error={props.errors.email}
          required
        />
      </form>
    </div>
  );
}
