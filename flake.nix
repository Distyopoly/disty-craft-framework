{
  outputs =
    inputs@{ flake-parts, ... }:
    flake-parts.lib.mkFlake { inherit inputs; } {
      flake = { };
      systems = [
        "aarch64-linux"
        "x86_64-linux"
        "aarch64-darwin"
        "x86_64-darwin"
      ];
      perSystem =
        { pkgs, ... }:
        {
          packages = {
            disty-craft-framework = pkgs.stdenvNoCC.mkDerivation {
              pname = "disty-craft-framework";
              version = "0.0.1-alpha.1";

              src = ./disty-craft-framework;

              installPhase = ''
                mkdir -p $out
                cp -r $src/* $out/
              '';
            };
          };
        };
    };
  inputs = {
    flake-parts.url = "github:hercules-ci/flake-parts";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };
}
