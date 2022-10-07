export type Values = {
  label1: string
  label2: string
  label3: string
  label4: string
  label5: string
  placeholder: string
  actionUrl: string
}

export const valuesDefault: Readonly<Values> = Object.freeze({
  label1: "Email",
  label2: "Message",
  label3: "Password",
  label4: "Name",
  label5: "Last",
  placeholder: "Write your message here",
  actionUrl: "https://httpbin.org/post",
})
