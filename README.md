# Node OWASP Snippets — Vulnerable vs Fixed (Express/Node.js)

**Purpose.** A hands-on lab to *learn by contrast*: for each OWASP Top-10 risk, we provide two runnable Node.js/Express snippets—
1) an intentionally **vulnerable** example you can exploit, and  
2) a **fixed** version that applies the right control (authz, encoding, validation, allowlists, headers, etc.).

> ⚠️ **Safety:** Do **not** deploy vulnerable snippets anywhere except an isolated local environment. Keep them off shared networks, clouds, and corp laptops.

---

## TL;DR (Quick Start)

```bash
# 1) Clone and enter
git clone <your-fork-url> node-owasp-snippets
cd node-owasp-snippets

# 2) Use Node 18+ (LTS)
node -v

# 3) Install base deps (helmet, joi, etc. for fixed examples)
npm install

# 4) Run any snippet directly (examples below assume files exist)
# Vulnerable XSS example (will add next)
node snippets/A03-injection/xss/vuln.js

# Fixed XSS example
node snippets/A03-injection/xss/fix.js
