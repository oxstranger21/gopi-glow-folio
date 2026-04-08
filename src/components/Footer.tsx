const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl text-center">
        <p className="neon-text font-semibold text-lg mb-2">
          🚀 Learning today, securing tomorrow.
        </p>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gopi Kumar. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
