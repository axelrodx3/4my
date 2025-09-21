# 🚀 Development Guide

## Preventing Build Issues

This guide helps prevent the common build manifest errors and internal server issues that can occur during development.

### Quick Fixes

If you encounter build errors or internal server errors:

```bash
# Stop the development server
taskkill /F /IM node.exe

# Clear build cache
npm run clean

# Restart development server
npm run dev
```

### ⚠️ IMPORTANT: Always Use Clean Start

**NEVER use `npm run dev` directly!** Always use:
```bash
npm run dev:clean
```

This prevents the build manifest errors that cause internal server errors.

### Available Scripts

- `npm run dev` - Start development server
- `npm run dev:clean` - Clear cache and start development server
- `npm run build` - Build for production
- `npm run build:clean` - Clear cache and build
- `npm run clean` - Clear build cache
- `npm run reset` - Full reset (clear cache + reinstall dependencies)

### Common Issues & Solutions

#### 1. Build Manifest Errors
**Symptoms**: `ENOENT: no such file or directory, open '_buildManifest.js.tmp'`
**Solution**: Run `npm run dev:clean`

#### 2. Internal Server Errors
**Symptoms**: 500 errors, server crashes
**Solution**: 
1. Stop server: `taskkill /F /IM node.exe`
2. Clear cache: `npm run clean`
3. Restart: `npm run dev`

#### 3. Stale Component Changes
**Symptoms**: Changes not reflecting in browser
**Solution**: Hard refresh (Ctrl+F5) or restart dev server

#### 4. Environment Variable Issues
**Symptoms**: Email functionality not working
**Solution**: Ensure `.env.local` exists with proper EmailJS configuration

### Best Practices

1. **Always use `npm run dev:clean`** when starting development
2. **Stop the server properly** before making major changes
3. **Clear cache regularly** if experiencing issues
4. **Check browser console** for client-side errors
5. **Monitor terminal output** for server-side errors

### File Structure

```
src/
├── app/           # Next.js app router pages
├── components/    # Reusable React components
├── config/        # Site configuration
└── ...

Key files:
- .env.local       # Environment variables (create manually)
- next.config.ts   # Next.js configuration
- package.json     # Dependencies and scripts
```

### Email Functionality

The contact form works in two modes:
1. **EmailJS configured**: Direct email sending
2. **EmailJS not configured**: Clipboard copy (default)

To enable EmailJS:
1. Create `.env.local` file
2. Add your EmailJS credentials
3. Follow `EMAILJS_SETUP.md` guide

### Troubleshooting Checklist

- [ ] Server is running on correct port (3000)
- [ ] No build errors in terminal
- [ ] Browser console is clear
- [ ] Environment variables are set (if needed)
- [ ] Build cache is clean
- [ ] All dependencies are installed

### Getting Help

If issues persist:
1. Run `npm run reset` for complete reset
2. Check the terminal output for specific error messages
3. Verify all files are saved and syntax is correct
4. Restart your development environment
