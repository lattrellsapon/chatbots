

from urllib.request import urlopen as uReq
from bs4 import BeautifulSoup as soup

my_url = 'https://www.aut.ac.nz/study/study-options/engineering-computer-and-mathematical-sciences/courses/bachelor-of-computer-and-information-sciences/software-development-major'

# Opening up connection, grabbing the page
uClient = uReq(my_url)
page_html = uClient.read()
uClient.close()

# HTML Parsing
page_soup = soup(page_html, "html.parser")

# Grabs all papers
papers = page_soup.findAll("a", {"class": "paperbox"})

filename = "softwaredevpapers.csv"
f = open(filename, "w")

headers = "PaperCode, PaperName\n"

f.write(headers)

# Loop through each papers
for paper in papers:

    # Paper Code
    paper_code = paper["id"]

    # Paper Name
    paper_name = paper.text

    print("Paper Code: " + paper_code)
    print("Paper Name: " + paper_name)

    f.write(paper_code + "," + paper_name.replace(",", "|") + "\n")

f.close()
    




