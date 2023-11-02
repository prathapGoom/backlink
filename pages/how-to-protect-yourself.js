import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  UnorderedList,
  ListItem,
  Divider,
  Link,
} from '@chakra-ui/react';

function Blog() {
  return (
    <Container maxW="container.xl" p={"5% 10%"}>
      <Heading as="h1" size="2xl" mb={10}>
        How to Protect Yourself from Phishing Attacks in 2023?
      </Heading>
      <Text mb={4}>
        In today's fast-changing digital world, it's crucial to protect your online activities. A staggering <strong>90%</strong> of phishing attacks are now executed via WhatsApp while <strong>97%</strong> of people can’t identify phishing emails, showcasing a drastic shift in the tactics of cybercriminals.
      </Text>
      <Text mb={4}>
        Additionally, the early months of 2023 saw a <Link href="https://contentdetector.ai/articles/phishing-attack-statistics" isExternal color="blue.500"><strong>464% increase in email scams</strong></Link> compared to 2022, with <strong>92%</strong> of companies falling prey to phishing attacks in the previous year. These facts highlight just how important it is to have strong online security.
      </Text>
      
    <Heading as="h2" size="xl" mb={4}>
        Learn And Share Knowledge
    </Heading>
        {/* ... */}
    <img src="/dalle1.png" width={"100%"} height={500}/>
    <Text mt={2}>Understanding the many different ways phishing can happen is the first step to protecting yourself. Knowing more helps you a lot, and when you share this knowledge, it makes everyone safer.</Text>
    <Heading as="h3" size="md" mb={5} mt={8}>
        Identify Phishing Tactics
    </Heading>
    <UnorderedList mb={4}>
        <ListItem><strong>Fake Social Media Messages:</strong> Scammers often create fake profiles to send messages containing malicious links.</ListItem>
        <ListItem><strong>Deceptive Emails:</strong> Emails pretending to be from reputable sources like your bank or a government agency, often asking for personal information.</ListItem>
    </UnorderedList>
    <Heading as="h3" size={"md"} mb={5} mt={8}>Educate Your Circle</Heading>
    <Text>Share your knowledge about phishing scams with your family, friends, and colleagues. When more people are aware, we collectively fortify our defense against these threats.</Text>
    
    <Heading as="h3" size={"md"} mb={3} mt={8}>Stay Updated</Heading>
    <Text>Phishing techniques are constantly evolving. Keep yourself informed about the latest trends in phishing scams.</Text>

    <Heading as="h2" size="lg" mt={8} mb={2}>
        Strengthen Your Online Security
    </Heading>
    <img src="/dalle2.png" width={"100%"} height={500}/>
    <Text mb={4} mt={3}>Keeping safe online is very important. Having strong, different passwords, using extra security steps like Multi-Factor Authentication, and keeping your security software updated are like wearing armor to protect yourself on the internet.</Text>
        {/* ... */}
    <UnorderedList mb={4}>
        <ListItem mb={2}><strong>Use Strong Passwords:</strong> Ensure each of your accounts is protected with a strong and unique password.</ListItem>
        <ListItem mb={2}><strong>Enable Multi-Factor Authentication (MFA):</strong> MFA adds an additional layer of security, making it harder for attackers to gain unauthorized access.</ListItem>
        <ListItem mb={2}><strong>Install Security Software:</strong> Use reliable antivirus and anti-malware software, and ensure it’s always up to date.</ListItem>
        <ListItem mb={2}><strong>Regular Software Updates:</strong> Keep all your software and applications updated to patch any security vulnerabilities.</ListItem>
        <ListItem mb={2}><strong>Regular Backups:</strong> Make regular data backups a habit to recover from potential ransomware attacks or data losses swiftly.</ListItem>
        <ListItem mb={2}><strong>Be Cautious with Communications:</strong> Always verify unexpected requests, especially if they appear suspicious or come from unknown sources.</ListItem>
    </UnorderedList>

    <Heading as="h2" size="lg" mb={4} mt={8}>
        Think Before You Click
    </Heading>
    <img src="/dalle3.png" width={"100%"} height={600}/>
    <Text mb={4} mt={3}>Being careful is important. Emails and messages are often used for phishing attacks, and being cautious can really help keep you safe.</Text>
    <Heading as="h3" size="md" mb={4} mt={7}>
        Verify Sender’s Identity
    </Heading>
        {/* ... */}
    <UnorderedList mb={4}>
        <ListItem mb={2}><strong>Call Them:</strong> If you get an email from your bank and it looks strange, call your bank with the number you have, not the one in the email, and ask if they sent you an email.</ListItem>
        <ListItem mb={2}><strong>Use Official Websites:</strong> If an email says it's from a company but looks suspicious, go to the company's official website by typing it in your browser (like going to apple.com), and call the contact number listed there to check if they really sent the email.</ListItem>
    </UnorderedList>
        {/* ... */}

    <Heading as="h3" size="md" mb={2} mt={8}>
        Avoid Unknown Links And Attachments
    </Heading>
    <Text mb={3}>Don’t download attachments or click on links unless you are certain of their safety.</Text>
    <UnorderedList mb={7}>
        <ListItem mb={2}><strong>Check for Red Flags:</strong> Look out for spelling mistakes, generic greetings, and other signs that an email might not be legitimate.</ListItem>
    </UnorderedList>

    <Heading as="h2" size="lg" mb={3} mt={8}>
        Protection In Online Mobiles And Games
    </Heading>
      <UnorderedList mb={4}>
        <ListItem mb={2}><strong>Verify Websites and Offers: </strong>Be skeptical of offers that seem too good to be true, such as in-game money generators. Always verify the authenticity of websites and offers.</ListItem>
        <ListItem mb={2}><strong>Avoid Credential Stuffing:</strong> Ensure your gaming credentials are unique and not reused across different platforms to prevent credential-stuffing attacks.</ListItem>
      </UnorderedList>

      <Heading as="h2" size="lg" mb={3} mt={8}>
        Protection On OnlyFans
      </Heading>
      <UnorderedList mb={4}>
        <ListItem mb={2}><strong>Be Wary of Suspicious Messages:</strong> Stay vigilant and look out for messages requesting personal information or payments outside of the platform’s official payment system.</ListItem>
        <ListItem mb={2}><strong>Report Suspicious Activity:</strong> If you come across any suspicious activity, report it immediately to OnlyFans support.</ListItem>
      </UnorderedList>
      
      <Heading as="h2" size="lg" mb={3} mt={8}>
        Protection On WhatsApp
      </Heading>
      <UnorderedList mb={4}>
        <ListItem mb={2}>Avoid Sharing Suspicious Links: Never share links without verifying their authenticity first, especially if they promise rewards or other incentives.</ListItem>
        <ListItem mb={2}>Be Cautious with QR Codes: Stay away from scanning QR codes sent by unknown sources as they could be phishing attempts aimed at gathering your personal information.</ListItem>
      </UnorderedList>

      <Heading as="h2" size="lg" mb={3} mt={8}>
        Ongoing Vigilance
      </Heading>
      <UnorderedList mb={4}>
        <ListItem mb={2}><strong>Stay Informed:</strong> Keep yourself updated with the latest scams and phishing tactics by following reputable sources, subscribing to security newsletters, and participating in communities focused on online safety.</ListItem>
        <ListItem mb={2}><strong>Regularly Review Account Security:</strong> Consistently review the security settings of your accounts, update your passwords, and monitor your accounts for any unusual activity.</ListItem>
        <ListItem mb={2}><strong>Use Secure Networks and VPNs:</strong> Protect your sensitive transactions and data with secure networks and VPNs, especially when using public Wi-Fi.</ListItem>
      </UnorderedList>

      {/* Be Mindful of What You Share Online Section */}
      <Heading as="h2" size="lg" mb={3} mt={8}>
        Be Mindful of What You Share Online
      </Heading>
      <Text mb={4}>
        Think twice before sharing personal information online, as scammers can use this data to craft convincing phishing messages.
      </Text>
      <UnorderedList mb={4}>
        <ListItem mb={2}><strong>Limit Personal Information Sharing:</strong> Be cautious about the amount of personal information you share on social media and other online platforms.</ListItem>
        <ListItem mb={2}><strong>Be Aware of Social Engineering:</strong> Understand that scammers may use the information you share online to target you with personalized phishing attempts.</ListItem>
      </UnorderedList>

      {/* Utilize Email Filters Section */}
      <Heading as="h2" size="lg" mb={3} mt={8}>
        Utilize Email Filters
      </Heading>
      <UnorderedList mb={4}>
        <ListItem mb={2}><strong>Configure Email Filters:</strong> Set up and optimize email filtering options to catch suspicious emails.</ListItem>
        <ListItem mb={2}><strong>Regularly Update Filters:</strong> Ensure your email filters are regularly updated to protect against new and evolving threats.</ListItem>
      </UnorderedList>

      {/* Verify Unexpected Requests Section */}
      <Heading as="h2" size="lg" mb={3} mt={8}>
        Verify Unexpected Requests
      </Heading>
      <UnorderedList mb={4}>
        <ListItem mb={2}><strong>Be Cautious with Information Requests:</strong> If you receive an unexpected request for sensitive information, verify the request through a trusted method before providing any information.</ListItem>
        <ListItem mb={2}><strong>Use Known Communication Channels:</strong> Contact the requester using a known and separate communication method to confirm their identity and the legitimacy of the request.</ListItem>
      </UnorderedList>

      {/* Avoid Pop-Up Forms Section */}
      <Heading as="h2" size="lg" mb={3} mt={8}>
        Avoid Pop-Up Forms
      </Heading>
      <UnorderedList mb={4}>
        <ListItem mb={2}><strong>Be Cautious with Pop-Ups:</strong> Avoid entering sensitive information into pop-up forms.</ListItem>
        <ListItem mb={2}><strong>Verify Website Security:</strong> Ensure that the website you are interacting with has a secure connection (https) and is legitimate.</ListItem>
      </UnorderedList>

      {/* Stay Up To Date On Phishing Threats Section */}
      <Heading as="h2" size="lg" mb={3} mt={8}>
        Stay Up To Date On Phishing Threats
      </Heading>
      <UnorderedList mb={4}>
        <ListItem mb={2}><strong>Follow Reputable Sources:</strong> Subscribe to security newsletters and follow reputable sources for the latest updates on phishing threats.</ListItem>
        <ListItem mb={2}><strong>Engage with Online Safety Communities:</strong> Join forums and communities focused on cybersecurity to learn from others and share your knowledge.</ListItem>
      </UnorderedList>

      <Heading as="h2" size="lg" mb={3} mt={8}>
        Conclusion
      </Heading>
      <Text mb={4}>
        Staying safe online is very important. We talked about many ways to protect yourself from fake messages and emails. Remember, always check if something looks strange, and don’t click on links if you are not sure. Share what you know about staying safe with your friends and family. Keeping yourself safe on the internet is like an ongoing project. By using these suggestions, you're building a stronger shield for your online activities.
      </Text>
    </Container>
  );
}

export default Blog;
