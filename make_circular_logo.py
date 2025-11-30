import sys
import os
try:
    from PIL import Image, ImageDraw
except ImportError:
    print("Pillow not installed. Please run: pip install Pillow")
    sys.exit(1)

def make_circular(image_path, output_path):
    try:
        img = Image.open(image_path).convert("RGBA")
        size = min(img.size)
        
        # Create a square image by cropping the center
        left = (img.width - size) // 2
        top = (img.height - size) // 2
        right = (img.width + size) // 2
        bottom = (img.height + size) // 2
        img = img.crop((left, top, right, bottom))
        
        # Create a circular mask
        mask = Image.new('L', (size, size), 0)
        draw = ImageDraw.Draw(mask)
        draw.ellipse((0, 0, size, size), fill=255)
        
        # Apply the mask
        result = Image.new('RGBA', (size, size), (0, 0, 0, 0))
        result.paste(img, (0, 0), mask)
        
        result.save(output_path)
        print(f"Successfully created circular image at {output_path}")
    except Exception as e:
        print(f"Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    input_path = r"c:\Users\Hi\Desktop\Tronix3650\public\Tronix3650final.jpg"
    output_path = r"c:\Users\Hi\Desktop\Tronix3650\public\Tronix3650final_circular.png"
    make_circular(input_path, output_path)
