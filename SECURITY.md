# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 0.1.x   | :white_check_mark: |

## Reporting a Vulnerability

The BuildLocal team takes security bugs seriously. We appreciate your efforts to responsibly disclose your findings, and will make every effort to acknowledge your contributions.

### Where to Report

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to: **security@buildlocal.org**

If you don't receive a response within 48 hours, please follow up via:
- GitHub Security Advisory: [Create a private vulnerability report](https://github.com/yourusername/buildlocal/security/advisories/new)

### What to Include

Please include the following information in your report:

- **Type of issue** (e.g., buffer overflow, SQL injection, XSS, etc.)
- **Full paths** of source file(s) related to the manifestation of the issue
- **Location of affected source code** (tag/branch/commit or direct URL)
- **Step-by-step instructions** to reproduce the issue
- **Proof-of-concept or exploit code** (if possible)
- **Impact of the issue**, including how an attacker might exploit it

### Response Timeline

- **Within 24 hours**: We will acknowledge receipt of your vulnerability report
- **Within 7 days**: We will send a more detailed response indicating the next steps
- **Within 30 days**: We aim to have a fix ready for critical vulnerabilities

### Safe Harbor

We support responsible disclosure and will not pursue legal action against security researchers who:

- Make good faith efforts to avoid privacy violations and disruptions to others
- Provide us with reasonable time to resolve vulnerabilities prior to public disclosure
- Avoid accessing or modifying other users' data

### Recognition

We believe in recognizing security researchers for their valuable contributions:

- **Hall of Fame**: We maintain a security researchers hall of fame
- **Public Recognition**: With your permission, we'll publicly acknowledge your contribution
- **CVE Assignment**: For qualifying vulnerabilities, we'll work to get proper CVE assignment

### Scope

The following are considered **in scope** for our security program:

- **Web Application Security**: XSS, CSRF, injection attacks, authentication bypasses
- **Client-Side Security**: Malicious file uploads, dangerous redirects
- **Infrastructure**: Server misconfigurations that could lead to data exposure
- **Dependencies**: Known vulnerabilities in third-party packages

The following are considered **out of scope**:

- **Social Engineering**: Phishing attacks against BuildLocal employees or users
- **Physical Security**: Physical attacks against BuildLocal infrastructure
- **Denial of Service**: DoS/DDoS attacks
- **Rate Limiting**: Issues related to rate limiting or resource exhaustion
- **Information Disclosure**: Version disclosure, debug information (unless leading to further exploitation)

### Security Best Practices

We follow these security practices:

- **Regular Updates**: We keep our dependencies up to date
- **Input Validation**: All user inputs are validated and sanitized
- **Secure Headers**: We implement appropriate security headers
- **Authentication**: Secure authentication mechanisms are in place
- **Data Protection**: Sensitive data is properly encrypted and handled

### Contact

For general security questions or concerns, please contact:
- **Email**: security@buildlocal.org
- **PGP Key**: [Available on request]

### Legal

This security policy is subject to change without notice. By participating in our security program, you agree to the terms outlined in this policy.

---

**Thank you for helping keep BuildLocal and our community safe!**
