import React from "react";
import "./PrivacyPolicyScreen.css";

const PrivacyPolicyScreen = () => {
    return (
        <div className="container">
            <div className="scrollView">
                <h1 className="headerStyle">Privacy Policy for My Tax Buddy</h1>

                <p className="subHeaderStyle">Effective Date: 01-01-2024</p>

                <div className="sectionStyle">1. Introduction</div>

                <p className="textStyle">
                    Thank you for choosing to download My Tax Buddy app. This Privacy Policy outlines how we collect, use, disclose, and manage your information when you use our tax calculator application. Please read this Privacy Policy carefully to understand our practices regarding your personal data and how we will treat it.
                </p>

                <div className="sectionStyle">2. Information We Collect</div>

                <p className="textStyle">
                    We do not collect any personal data through My Tax Buddy. The app is designed to function without requiring any user-specific information. However, we use third-party services, such as Google AdMob and analytics tools, which may collect certain non-personal or personal information.
                </p>

                <div className="subSectionStyle">2.1 Non-personal Information</div>

                <p className="textStyle">
                    The non-personal information collected may include but is not limited to:
                </p>

                <ul className="bulletPointStyle">
                    <li>- Device information (e.g., device type, model, operating system)</li>
                    <li>- Usage data (e.g., app features used, interactions)</li>
                    <li>- Ad performance data (e.g., ad clicks, impressions)</li>
                </ul>

                <p className="textStyle">
                    This information is collected to improve the app's functionality, performance, and user experience.
                </p>

                <div className="sectionStyle">3. Third-Party Services</div>

                <div className="subSectionStyle">3.1 Google AdMob</div>

                <p className="textStyle">
                    My Tax Buddy uses Google AdMob to display ads. AdMob may collect and use certain non-personal information for personalized advertising purposes. Please refer to Google's Privacy Policy for more information on how Google collects and processes data: Google Privacy & Terms.
                </p>

                <div className="subSectionStyle">3.2 Open-AI</div>

                <p className="textStyle">
                    Our avant-garde AI feature, empowered by the OpenAI API, enables users to pose tax-related inquiries without the need for personal information disclosure. OpenAI's processing of queries is anonymized, respecting user privacy and ensuring a secure interaction.
                </p>

                <div className="subSectionStyle">3.3 Analytics Tools</div>

                <p className="textStyle">
                    We use analytics tools to gather non-personal information about the usage of the app. This data helps us understand user behavior, identify areas for improvement, and enhance the overall user experience. The analytics tools we use may include:
                </p>

                <ul className="bulletPointStyle">
                    <li>Sentry</li>
                </ul>

                <p className="textStyle">
                    Please review the privacy policies of these analytics providers for more information on their data collection and processing practices.
                </p>

                <div className="sectionStyle">4. GDPR Compliance</div>

                <p className="textStyle">
                    My Tax Buddy is designed to comply with the General Data Protection Regulation (GDPR) requirements. As such, we commit to the following principles:
                </p>

                <ul className="bulletPointStyle">
                    <li>- Lawfulness, Fairness, and Transparency: We are transparent about the data we collect and how it is used.</li>
                    <li>- Purpose Limitation: We only collect data for specific, legitimate purposes and do not use it for other incompatible purposes.</li>
                    <li>- Data Minimization: We only collect the minimum amount of data necessary for the intended purpose.</li>
                    <li>- Accuracy: We strive to ensure that the data we collect and process is accurate and up-to-date.</li>
                    <li>- Storage Limitation: We do not retain data longer than necessary for the specified purposes.</li>
                    <li>- Integrity and Confidentiality: We implement appropriate security measures to protect the data from unauthorized access or disclosure.</li>
                </ul>

                <div className="sectionStyle">5. Your Rights</div>

                <p className="textStyle">
                    As a user of My Tax Buddy, you have the following rights:
                </p>

                <ul className="bulletPointStyle">
                    <li>- The right to access your personal data.</li>
                    <li>- The right to rectify inaccurate or incomplete personal data.</li>
                    <li>- The right to erasure of personal data.</li>
                    <li>- The right to restrict processing of personal data.</li>
                    <li>- The right to data portability.</li>
                </ul>

                <p className="textStyle">
                    To exercise any of these rights or for inquiries about your personal data, please contact us at mytaxbuddy@gmail.com.
                </p>

                <div className="sectionStyle">6. Changes to the Privacy Policy</div>

                <p className="textStyle">
                    We may update this Privacy Policy to reflect changes in our practices or applicable laws. Any changes will be effective immediately upon posting the updated Privacy Policy within the app. Your continued use of My Tax Buddy constitutes acceptance of these changes.
                </p>

                <div className="sectionStyle">7. Contact Information</div>

                <p className="textStyle">
                    For questions or concerns regarding this Privacy Policy, please contact us at:
                </p>

                <p className="contactInfoStyle">My Tax Buddy</p>
                <p className="contactInfoStyle">mytaxbuddy@gmail.com</p>
                <a href="https://www.mytaxbuddy.co.uk" target="_blank" rel="noopener noreferrer">
                    <p className="contactInfoStyle">mytaxbuddy.co.uk</p>
                </a>
                <p className="lastUpdatedStyle">Last Updated: 01-01-2024</p>
            </div>
        </div>
    );
};

export default PrivacyPolicyScreen;
