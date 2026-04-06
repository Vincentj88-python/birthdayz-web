import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export function WelcomeEmail() {
  return (
    <Html>
      <Head />
      <Preview>You're on the Birthdayz waitlist!</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section style={header}>
            <Text style={emoji}>🎂</Text>
            <Heading style={heading}>Welcome to Birthdayz!</Heading>
          </Section>
          <Text style={paragraph}>
            You're on the waitlist — and we're so glad you're here.
          </Text>
          <Text style={paragraph}>
            Birthdayz is a birthday reminder app that helps you never forget a
            friend or family member's special day. When the time comes, we'll
            help you send a heartfelt, AI-powered wish via WhatsApp — in English
            or Afrikaans.
          </Text>
          <Text style={paragraph}>
            We're putting the finishing touches on the app and will let you know
            the moment it's ready for download.
          </Text>
          <Text style={paragraph}>
            In the meantime, think about all the birthdays you'll never forget
            again. 😊
          </Text>
          <Hr style={hr} />
          <Text style={footer}>
            Made with love in South Africa.
            <br />
            &copy; {new Date().getFullYear()} Birthdayz
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#FFF5EB",
  fontFamily: "'Quicksand', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
};

const container = {
  backgroundColor: "#FFFBF7",
  margin: "40px auto",
  padding: "40px 32px",
  borderRadius: "20px",
  maxWidth: "480px",
  border: "1px solid #F0E6DA",
};

const header = {
  textAlign: "center" as const,
  marginBottom: "24px",
};

const emoji = {
  fontSize: "48px",
  margin: "0",
  lineHeight: "1",
};

const heading = {
  color: "#3D2B1F",
  fontSize: "28px",
  fontWeight: "700",
  margin: "16px 0 0",
  fontFamily: "'Georgia', 'Times New Roman', serif",
};

const paragraph = {
  color: "#3D2B1F",
  fontSize: "16px",
  lineHeight: "1.6",
  margin: "16px 0",
};

const hr = {
  borderColor: "#F0E6DA",
  margin: "32px 0",
};

const footer = {
  color: "#B8A590",
  fontSize: "13px",
  lineHeight: "1.5",
  textAlign: "center" as const,
};
