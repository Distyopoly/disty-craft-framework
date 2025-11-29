{
  pkgs,
  _lib,
  _inputs,
  ...
}:
{
  # https://devenv.sh/packages/
  packages = [
    pkgs.git
    pkgs.git-cliff
    pkgs.commitizen
  ];

  dotenv.disableHint = true;

  # https://devenv.sh/languages/
  languages = {
    javascript = {
      enable = true;
      package = pkgs.nodejs_22;
      pnpm.enable = true;
    };
  };

  treefmt = import ./nix/treefmt;

  scripts = {
    framework-install.exec = "pnpm install";
  };

  processes = {
    dev.exec = "pnpm dev --port 5173";
  };

  profiles = {
    hostname."leswell-nixos".module = {
      imports = [ ./nix/nginx ];
    };
  };
}
