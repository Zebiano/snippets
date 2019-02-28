# Run this through a bash command line

echo "Deploying build to github pages..."
npm run generate
rm -rf ../dist && echo "Successfully removed 'dist'."
rm -rf ../-nuxt && echo "Successfully removed '-nuxt'."
mv dist ../ && echo "Successfully moved 'dist'".
mv ../dist/* ../ && echo "Successfully moved 'dist' contents."
rm -rf ../dist && echo "Successfully removed 'dist'."