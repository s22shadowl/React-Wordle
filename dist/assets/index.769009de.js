import{s as c,W as J,j as A,U as F,r as b,R as V,a as X}from"./vendor.93425360.js";const Z=function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const d of e)if(d.type==="childList")for(const t of d.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&f(t)}).observe(document,{childList:!0,subtree:!0});function i(e){const d={};return e.integrity&&(d.integrity=e.integrity),e.referrerpolicy&&(d.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?d.credentials="include":e.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function f(e){if(e.ep)return;e.ep=!0;const d=i(e);fetch(e.href,d)}};Z();const o={background_main:"#1C2833",background_sub:"#FFFFFF",font_main:"#FFFFFF",font_sub:"#1C2833",words_background_correct:"#27AE60",words_background_nearAnswer:"#FFC300",words_background_unused:"#ABB2B9",words_background_wrongAnswer:"#273746"},Q=c.div`
  position: absolute;
  background-color: ${o.background_sub};
  color: ${o.font_sub};
  width: 200px;
  font-size: 1.5rem;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 100;
`,Y=J`
    * {
        font-family: "微軟正黑體";
        font-weight: bold;
        -webkit-user-select:none;
        -moz-user-select:none;
        -o-user-select:none;
        user-select:none;
    }
    body {
      margin: 0;
    }
    .container {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        background-color: ${o.background_main};
    }

    button {
        background-color: inherit;
        border: none;
        box-shadow: none;
    }
`,a=A.exports.jsx,k=A.exports.jsxs,ee=A.exports.Fragment,se=F`
  from {
  }
  20% {
    transform: translate(5px, 0px);
  }
  40% {
    transform: translate(-5px, 0px);
  }
  60% {
    transform: translate(2.5px, 0px);
  }
  80% {
    transform: translate(-2.5px, 0px);
  }
  to {
    transform: translate(0px, 0px);
  }
`,ae=F`
 from {  
 }
 25% {
  transform:scale(1.05, 1.05);
 }
 50% {
 }
`,re=F`
 from {
  background-color: ${o.words_background_unused};
 }
 50% {
  background-color: ${o.words_background_unused};
  transform: rotateX(90deg);
 }
 to {

 }
`,oe=c.div``,te=c.div`
  display: flex;
  min-width: 300px;
  height: 60px;
  margin: 6px;
  animation: ${r=>r.isInvalidAnswer?se:"none"}
    linear 0.25s 2;
`,ne=c.div`
  position: relative;
  height: 100%;
  width: 60px;
  margin: 3px;
  border-radius: 3px;
  background-color: ${r=>{switch(r.status){case"TBD":return o.words_background_unused;case"correct":return o.words_background_correct;case"near":return o.words_background_nearAnswer;case"wrong":return o.words_background_wrongAnswer}}};
  animation: ${r=>r.animate}
    linear 1s;
  &::before {
    content: "${r=>r.value?r.value:""}";
    font-size: 2rem;
    color: ${o.font_main};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`,ie=({currentMap:r,isSendingAnswer:p,currentRow:i,currentCol:f})=>{const e=r[0].map((d,t)=>a(te,{isInvalidAnswer:p==="invalid"&&i===t,children:d.map((m,h)=>a(ne,{value:m,status:r[1][t][h],animate:i-1===t?re:f-1===h&&i===t?ae:"none"},`${t}-${h}`))},t));return a(oe,{children:e})},ce=c.div`
  position: relative;
  text-align: center;
  width: 100%;
  height: 50px;
  font-size: 2rem;
  color: ${o.font_main};
  padding: 5px;
  border-bottom: ${o.background_sub} 2px solid;
`,B=c.div`
  cursor: pointer;
  position: absolute;
  border-radius: 100%;
  margin: 5px;
  background-color: ${o.background_sub};
  height: 30px;
  width: 30px;
`,de=c(B)``,le=c(B)`
  right: 5px;
`,ue=c(B)`
  right: 40px;
`,be=()=>k(ce,{children:[a(de,{}),a(le,{}),a(ue,{}),"Wordle22"]}),$=`aback
abase
abate
abaya
abbey
abbot
abets
abhor
abide
abode
abort
about
above
abuse
abuts
abyss
ached
aches
acids
acing
ackee
acorn
acres
acrid
acted
actin
actor
acute
adage
adapt
added
adder
addle
adept
adieu
adios
adits
adman
admin
admit
adobe
adobo
adopt
adore
adorn
adult
adzes
aegis
aeons
aerie
affix
afire
afoot
afore
after
again
agape
agate
agave
agent
aggro
agile
aging
aglow
agony
agora
agree
ahead
ahold
aided
aider
aides
ailed
aimed
aimer
aioli
aired
aisle
alarm
album
alder
aleph
alert
algae
algal
alias
alibi
alien
align
alike
alive
alkyd
alkyl
allay
alley
allot
allow
alloy
allyl
aloes
aloft
aloha
alone
along
aloof
aloud
alpha
altar
alter
altos
alums
amass
amaze
amber
ambit
amble
ambos
amend
amide
amine
amino
amiss
amity
amnio
among
amour
amped
ample
amply
amuse
ancho
angel
anger
angle
angry
angst
anima
anime
anion
anise
ankle
annas
annex
annoy
annul
anode
anole
antic
antis
antsy
anvil
aorta
apace
apart
aphid
apnea
apple
apply
apron
apses
apter
aptly
aquas
arbor
ardor
areal
areas
areca
arena
argon
argot
argue
argus
arias
arils
arise
armed
armor
aroma
arose
array
arrow
arses
arson
artsy
asana
ascot
ashen
ashes
aside
asked
asker
askew
aspen
aspic
assay
asses
asset
aster
astir
asura
atlas
atman
atoll
atoms
atone
atopy
attic
audio
audit
auger
aught
augur
aunts
aunty
aural
auras
autos
auxin
avail
avers
avert
avian
avoid
avows
await
awake
award
aware
awash
awful
awoke
axels
axial
axils
axing
axiom
axion
axles
axons
azide
azole
azure
babel
babes
babka
backs
bacon
baddy
badge
badly
bagel
baggy
bails
bairn
baits
baize
baked
baker
bakes
baldy
baled
baler
bales
balks
balky
balls
balms
balmy
balsa
banal
bands
bandy
banes
bangs
banjo
banks
barbs
bards
bared
barer
bares
barge
barks
barmy
barns
baron
barre
basal
based
baser
bases
basic
basil
basin
basis
basks
basso
bassy
baste
batch
bated
bathe
baths
batik
baton
batts
batty
bawdy
bawls
bayed
bayou
beach
beads
beady
beaks
beams
beamy
beans
beard
bears
beast
beats
beaus
beaut
beaux
bebop
becks
beech
beefs
beefy
beeps
beers
beery
beets
befit
began
beget
begin
begun
beige
being
belay
belch
belie
belle
bells
belly
below
belts
bench
bends
bendy
bento
bents
beret
bergs
berms
berry
berth
beryl
beset
bests
betas
betel
betta
bevel
bezel
bhaji
bible
bicep
biddy
bided
bides
bidet
bight
bigot
bijou
biked
biker
bikes
biles
bilge
bills
billy
bimbo
bindi
binds
binge
bingo
biome
biota
bipod
birch
birds
birth
bison
bitch
biter
bites
bitsy
bitty
black
blade
blame
bland
blank
blare
blase
blast
blaze
bleak
bleat
blebs
bleed
bleep
blend
bless
blimp
blind
bling
blini
blink
blips
bliss
blitz
bloat
blobs
block
blocs
blogs
bloke
blond
blood
bloom
bloop
blots
blown
blows
blued
blues
bluey
bluff
blunt
blurb
blurs
blurt
blush
board
boars
boast
boats
bobby
bocce
boche
boded
bodes
boffo
bogey
boggy
bogie
bogus
boils
bolas
boles
bolls
bolts
bolus
bombe
bombs
bonds
boned
boner
bones
boney
bongo
bongs
bonks
bonny
bonus
boobs
booby
booed
books
booms
boomy
boons
boors
boost
booth
boots
booty
booze
boozy
boppy
borax
bored
borer
bores
boric
borne
boron
bosom
boson
bossy
bosun
botch
bough
boule
bound
bouts
bowed
bowel
bower
bowls
boxed
boxer
boxes
boyar
boyos
bozos
brace
bract
brads
brags
braid
brain
brake
brand
brans
brash
brass
brats
brave
bravo
brawl
brawn
brays
braze
bread
break
bream
breed
brews
briar
bribe
brick
bride
brief
brier
brigs
brims
brine
bring
brink
briny
brisk
brits
broad
broch
broil
broke
brome
bronc
brood
brook
broom
broth
brown
brows
bruin
bruit
brunt
brush
brute
bubba
bucks
buddy
budge
buffs
buggy
bugle
build
built
bulbs
bulge
bulks
bulky
bulla
bulls
bully
bumps
bumpy
bunch
bunds
bundt
bunks
bunny
bunts
buoys
burbs
burgs
burka
burly
burns
burnt
burps
burqa
burro
burrs
bursa
burst
bused
buses
bushy
busts
busty
butch
butte
butts
buxom
buyer
buzzy
bylaw
byres
bytes
byway
cabal
cabby
caber
cabin
cable
cacao
cache
cacti
caddy
cadet
cadre
cafes
caged
cages
cagey
cairn
caked
cakes
cakey
calfs
calif
calla
calls
calms
calve
calyx
camel
cameo
campo
camps
campy
canal
candy
caned
canes
canid
canna
canny
canoe
canon
canto
caped
caper
capes
capon
capos
caput
carat
carbo
carbs
cards
cared
carer
cares
cargo
carob
carol
carom
carps
carry
carte
carts
carve
cased
cases
casks
caste
casts
catch
cater
catty
caulk
cause
caved
caver
caves
cavil
cease
cecal
cecum
cedar
ceded
cedes
ceili
celeb
cello
cells
celts
cents
chads
chafe
chaff
chain
chair
chalk
champ
chana
chant
chaos
chaps
chard
charm
chars
chart
chase
chasm
chats
cheap
cheat
check
cheek
cheep
cheer
chefs
chemo
chert
chess
chest
chews
chewy
chica
chick
chico
chide
chief
child
chile
chili
chill
chime
chimp
china
chine
ching
chino
chins
chips
chirp
chits
chive
chock
choir
choke
chomp
chops
chord
chore
chose
chows
chubs
chuck
chuff
chugs
chump
chums
chunk
churn
chute
cider
cigar
cinch
circa
cisco
cited
cites
civet
civic
civil
civvy
clack
clade
claim
clamp
clams
clang
clank
clans
claps
clash
clasp
class
clave
claws
clays
clean
clear
cleat
clefs
cleft
clerk
click
cliff
climb
clime
cline
cling
clink
clips
cloak
clock
clods
clogs
clomp
clone
close
cloth
clots
cloud
clout
clove
clown
clubs
cluck
clued
clues
clump
clung
clunk
coach
coals
coast
coati
coats
cobia
cobra
cocci
cocks
cocky
cocoa
codas
codec
coded
coder
codes
codex
codon
coeds
cohos
coifs
coils
coins
cokes
colas
colds
coles
colic
colin
colon
color
colts
comas
combo
combs
comer
comes
comet
comfy
comic
comma
commo
compo
comps
comte
conch
condo
coned
cones
conga
congo
conic
conks
cooed
cooks
cools
coops
coopt
coped
copes
copra
copse
coral
cords
cored
corer
cores
corgi
corks
corky
corms
corns
cornu
corny
corps
costs
cotta
couch
cough
could
count
coupe
coups
court
coven
cover
coves
covet
covey
cowed
cower
cowls
coyly
crabs
crack
craft
crags
cramp
crams
crane
crank
crape
craps
crash
crass
crate
crave
crawl
craws
craze
crazy
creak
cream
credo
creed
creek
creel
creep
creme
crepe
crept
cress
crest
crews
cribs
crick
cried
crier
cries
crime
crimp
crisp
crits
croak
crock
crocs
croft
crone
crony
crook
croon
crops
cross
croup
crowd
crown
crows
crude
cruel
cruet
crumb
cruse
crush
crust
crypt
cubby
cubed
cubes
cubic
cubit
cuddy
cuffs
culls
culpa
cults
cumin
cupid
cuppa
curbs
curds
cured
cures
curia
curio
curls
curly
curry
curse
curve
curvy
cushy
cusps
cuter
cutie
cutis
cutup
cycad
cycle
cyclo
cynic
cysts
czars
dacha
daddy
dados
daffy
daily
dairy
daisy
dales
dames
damns
damps
dance
dandy
dared
dares
darks
darns
darts
dashi
dated
dater
dates
datum
daubs
daunt
davit
dawns
dazed
deals
dealt
deans
dears
deary
death
debit
debts
debug
debut
decaf
decal
decay
decks
decor
decoy
decry
deeds
deems
deeps
deers
defer
deify
deign
deism
deist
deity
dekes
delay
delft
delis
dells
delta
delve
demon
demos
demur
denim
dense
dents
depot
depth
derby
desks
deter
detox
deuce
devil
dewar
dhikr
dhows
dials
diary
diced
dices
dicey
dicky
dicta
diets
digit
diked
dikes
dills
dilly
dimer
dimes
dimly
dinar
dined
diner
dines
dingo
dings
dingy
dinks
dinky
dinos
diode
dippy
direr
dirge
dirty
disco
discs
dishy
disks
ditch
ditsy
ditto
ditty
ditzy
divan
divas
dived
diver
dives
divot
divvy
dizzy
docks
dodge
dodgy
dodos
doers
doffs
doges
doggy
dogma
doing
doled
doles
dolls
dolly
dolor
dolts
domed
domes
donee
dongs
donna
donor
donut
dooms
doomy
doors
doozy
doped
dopes
dopey
dorks
dorky
dorms
dosas
dosed
doses
doted
dotes
dotty
doubt
dough
doula
douse
doves
dowdy
dowel
dower
downs
downy
dowry
dowse
doyen
dozed
dozen
dozer
dozes
drabs
draft
drags
drain
drake
drama
drams
drank
drape
drawl
drawn
draws
drays
dread
dream
dreck
dregs
dress
dribs
dried
drier
dries
drift
drill
drily
drink
drips
drive
droid
droll
drone
drool
droop
drops
dross
drove
drown
drugs
druid
drums
drunk
drupe
dryad
dryer
dryly
duals
ducal
ducat
duchy
ducks
ducky
ducts
dudes
duels
duets
duffs
dukes
dulls
dully
dulse
dumbo
dummy
dumps
dumpy
dunce
dunes
dunks
duomo
duped
dupes
dural
durum
dusks
dusky
dusts
dusty
dutch
duvet
dwarf
dweeb
dwell
dwelt
dyads
dyers
dying
dykes
eager
eagle
eared
earls
early
earns
earth
eased
easel
easer
eases
eaten
eater
eaves
ebbed
ebony
ebook
echos
eclat
edema
edged
edger
edges
edict
edify
edits
eejit
eerie
egged
egret
eider
eidos
eight
eject
ejido
eland
elbow
elder
elect
elegy
elide
elite
elope
elude
elute
elven
elves
email
embed
ember
emcee
emery
emirs
emits
emote
empty
enact
ended
endow
enema
enemy
enjoy
ennui
enoki
enrol
ensue
enter
entry
envoy
eosin
epics
epoch
epoxy
equal
equip
erase
erect
ergot
erode
erred
error
erupt
essay
ether
ethic
ethos
ethyl
etude
euros
evade
evens
event
every
evict
evils
evoke
ewers
exact
exalt
exams
excel
execs
exert
exile
exist
exits
expat
expel
expos
extol
extra
exude
exult
exurb
eying
eyrie
fable
faced
facer
faces
facet
facia
facts
faded
fader
fades
faery
fails
faint
fairs
fairy
faith
faked
faker
fakes
fakie
fakir
falls
famed
fancy
fangs
fanny
farce
fared
fares
farms
farts
fasts
fatal
fated
fates
fatso
fatty
fatwa
fault
fauna
fauns
favas
faves
favor
fawns
faxed
faxes
fazed
fazes
fears
feast
feats
fecal
feces
feeds
feels
feign
feint
fella
fells
felon
felts
femme
femur
fence
fends
feral
feria
ferns
ferny
ferry
fests
fetal
fetch
feted
fetes
fetid
fetus
feuds
fever
fewer
fiats
fiber
fibre
fiche
ficus
fiefs
field
fiend
fiery
fifes
fifth
fifty
fight
filch
filed
filer
files
filet
fills
filly
films
filmy
filth
final
finca
finch
finds
fined
finer
fines
finis
finks
fiord
fired
fires
firms
first
fishy
fists
fitly
fiver
fives
fixed
fixer
fixes
fizzy
fjord
flack
flags
flail
flair
flake
flaky
flame
flank
flans
flaps
flare
flash
flask
flats
flaws
flays
fleas
fleck
flees
fleet
flesh
flick
flier
flies
fling
float
flood
floor
flour
flown
flows
fluid
flyer
focal
focus
folks
fonts
foods
force
forms
forth
forty
forum
found
frame
fraud
fresh
fried
fries
front
frost
fruit
fuels
fully
funds
funny
gains
games
gamma
gases
gates
gauge
gears
genes
genre
ghost
giant
gifts
girls
given
gives
gland
glass
globe
glory
gloss
glove
glued
goals
goats
going
goods
grace
grade
grain
grams
grand
grant
grape
graph
grasp
grass
grave
great
greek
green
greet
grief
grill
grind
grips
gross
group
grove
grown
grows
guard
guess
guest
guide
guild
guilt
habit
hairs
halls
hands
handy
hangs
happy
harsh
hated
hates
haven
hawks
heads
heard
heart
heavy
hedge
heels
hello
helps
hence
herbs
highs
hills
hints
hired
hobby
holds
holes
holly
homes
honey
honor
hooks
hoped
hopes
horns
horse
hosts
hotel
hours
house
hover
human
humor
hurts
icons
ideal
ideas
idiot
image
imply
inbox
incur
index
indie
inner
input
intro
issue
items
jeans
jelly
jewel
joins
joint
jokes
judge
juice
juicy
jumps
keeps
kicks
kills
kinda
kinds
kings
knees
knife
knock
knots
known
knows
label
labor
lacks
lakes
lamps
lands
lanes
large
laser
lasts
later
laugh
layer
leads
leaks
learn
lease
least
leave
legal
lemon
level
lever
light
liked
likes
limbs
limit
lined
linen
liner
lines
links
lions
lists
lived
liver
lives
loads
loans
lobby
local
locks
lodge
logic
logos
looks
loops
loose
lords
loses
loved
lover
loves
lower
loyal
lucky
lunar
lunch
lungs
lying
macro
magic
major
maker
makes
males
maple
march
marks
marry
masks
match
mates
maths
matte
maybe
mayor
meals
means
meant
meats
medal
media
meets
melee
menus
mercy
merge
merit
merry
messy
metal
meter
metro
micro
midst
might
miles
minds
mines
minor
minus
mixed
mixer
mixes
model
modem
modes
moist
money
month
moral
motor
mount
mouse
mouth
moved
moves
movie
music
myths
nails
naked
named
names
nasal
nasty
naval
needs
nerve
never
newer
newly
nexus
nicer
niche
night
ninja
ninth
noble
nodes
noise
noisy
norms
north
notch
noted
notes
novel
nurse
nylon
oasis
occur
ocean
offer
often
older
olive
omega
onion
onset
opens
opera
opted
optic
orbit
order
organ
other
ought
ounce
outer
owned
owner
oxide
packs
pages
pains
paint
pairs
panel
panic
pants
paper
parks
parts
party
pasta
paste
patch
paths
patio
pause
peace
peach
peaks
pearl
pedal
peers
penis
penny
perks
pests
petty
phase
phone
photo
piano
picks
piece
piles
pills
pilot
pinch
pipes
pitch
pixel
pizza
place
plain
plane
plans
plant
plate
plays
plaza
plots
plugs
poems
point
poker
polar
poles
polls
pools
porch
pores
ports
posed
poses
posts
pouch
pound
power
press
price
pride
prime
print
prior
prize
probe
promo
prone
proof
props
proud
prove
proxy
psalm
pulls
pulse
pumps
punch
pupil
puppy
purse
queen
query
quest
queue
quick
quiet
quilt
quite
quote
races
racks
radar
radio
rails
rainy
raise
rally
ranch
range
ranks
rapid
rated
rates
ratio
razor
reach
react
reads
ready
realm
rebel
refer
reign
relax
relay
renal
renew
reply
reset
resin
retro
rider
rides
ridge
rifle
right
rigid
rings
rinse
risen
rises
risks
risky
rival
river
roads
robot
rocks
rocky
rogue
roles
rolls
roman
rooms
roots
ropes
roses
rough
round
route
royal
rugby
ruins
ruled
ruler
rules
rural
sadly
safer
salad
sales
salon
sandy
satin
sauce
saved
saves
scale
scalp
scans
scare
scarf
scary
scene
scent
scoop
scope
score
scout
scrap
screw
seals
seams
seats
seeds
seeks
seems
sells
sends
sense
serum
serve
setup
seven
sewer
shade
shaft
shake
shall
shame
shape
share
shark
sharp
sheep
sheer
sheet
shelf
shell
shift
shine
shiny
ships
shirt
shock
shoes
shook
shoot
shops
shore
short
shots
shown
shows
sides
siege
sight
sigma
signs
silly
since
sites
sixth
sized
sizes
skies
skill
skins
skirt
skull
slate
slave
sleek
sleep
slept
slice
slide
slope
slots
small
smart
smell
smile
smoke
snack
snake
sneak
socks
soils
solar
solid
solve
songs
sonic
sorry
sorts
souls
sound
south
space
spare
spark
speak
specs
speed
spell
spend
spent
sperm
spice
spicy
spike
spine
spite
split
spoke
spoon
sport
spots
spray
spurs
squad
stack
staff
stage
stain
stake
stamp
stand
stark
stars
start
state
stats
stays
steak
steal
steam
steel
steep
steer
stems
steps
stick
stiff
still
stock
stole
stone
stood
stool
stops
store
storm
story
stove
strap
straw
strip
stuck
study
stuff
style
sucks
sugar
suite
suits
sunny
super
surge
sushi
swear
sweat
sweet
swept
swift
swing
swiss
sword
syrup
table
taken
takes
tales
talks
tanks
tapes
tasks
taste
tasty
taxes
teach
teams
tears
teens
teeth
tells
tempo
tends
tenth
tents
terms
tests
texts
thank
theft
their
theme
there
these
thick
thief
thigh
thing
think
third
those
three
threw
throw
thumb
tiger
tight
tiles
timer
times
tired
tires
title
toast
today
token
tones
tools
tooth
topic
torch
total
touch
tough
tours
towel
tower
towns
toxic
trace
track
tract
trade
trail
train
trait
trans
traps
trash
treat
trees
trend
trial
tribe
trick
tried
tries
trips
trout
truck
truly
trump
trunk
trust
truth
tubes
tumor
tuned
tunes
turbo
turns
tutor
tweet
twice
twins
twist
types
tyres
ultra
uncle
under
union
unite
units
unity
until
upper
upset
urban
urged
urine
usage
users
using
usual
vague
valid
value
valve
vapor
vault
vegan
veins
vents
venue
verse
video
views
villa
vinyl
viral
virus
visas
visit
vital
vivid
vocal
vodka
voice
volts
voted
voter
votes
wages
wagon
waist
walks
walls
wants
warns
waste
watch
water
watts
waves
wears
weeds
weeks
weigh
weird
wells
welsh
whale
wheat
wheel
where
which
while
white
whole
whose
wider
widow
width
winds
wines
wings
wiped
wired
wires
witch
wives
woman
women
woods
words
works
world
worms
worry
worse
worst
worth
would
wound
wrath
wrist
write
wrong
wrote
yacht
yards
years
yeast
yield
young
yours
youth
yummy
zones`,pe=$.split(/\n/),he=()=>pe[Math.floor(Math.random()*2499)].toUpperCase().split(""),W=c.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99;
`,fe=c.div`
  position: fixed;
  width: 20vw;
  height: 60vh;
  background-color: ${o.background_sub};
  padding: 10px;
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`,me=c.div`
  position: fixed;
  width: 200px;
  height: 200px;
  padding: 10px;
  background-color: ${o.background_sub};
  text-align: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
`,ye=({setIsShowingRule:r})=>a(W,{onClick:()=>r(!1),children:a(fe,{children:"Wordle \u7684\u73A9\u6CD5\u5F88\u7C21\u55AE\u5C31\u662F\u731C\u55AE\u5B57\uFF0C\u80FD\u6709\u516D\u6B21\u7684\u6A5F\u6703\u53EF\u4EE5\u628A\u5C0D\u7684\u55AE\u5B57\u731C\u51FA\u4F86\uFF0C\u73A9\u6CD5\u548C\u7D93\u5178\u76841A2B \u731C\u6578\u5B57\u76CA\u667A\u904A\u6232\u5F88\u985E\u4F3C\u3002 \u7576\u9078\u5230\u6B63\u78BA\u7684\u5B57\u6BCD\u5F8C\uFF0C\u800C\u4E14\u5B83\u5728\u6B63\u78BA\u7684\u4F4D\u7F6E\u6642\uFF0C\u7A7A\u683C\u5C31\u6703\u8B8A\u6210\u7DA0\u8272\uFF1B\u800C\u7576\u5B57\u6BCD\u662F\u6709\u51FA\u73FE\u5728\u55AE\u5B57\u5167\uFF0C\u4F46\u9806\u5E8F\u932F\u8AA4\u7684\u8A71\uFF0C\u7A7A\u683C\u5C31\u6703\u8B8A\u6210\u9EC3\u8272\uFF1B\u5982\u679C\u5B57\u6BCD\u4E26\u6C92\u6709\u51FA\u73FE\u5728\u55AE\u5B57\u4E2D\u7684\u8A71\uFF0C\u5C31\u6703\u4EE5\u7070\u8272\u986F\u793A\u3002"})}),ge=({currentRow:r,setIsShowingResult:p})=>a(W,{onClick:()=>p(!1),children:k(me,{children:["\u4F60\u7684\u731C\u6E2C\u6B21\u6578\uFF1A",r]})}),ke=c.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 30vh;
  width: 100%;
`,we=c.div`
  display: flex;
  justify-content: center;
  height: 70px;
  margin: 3px;
`,q=c.button`
  cursor: pointer;
  height: 100%;
  width: 40px;
  margin: 3px;
  border-radius: 3px;
  background-color: ${r=>{switch(r.status){case"unused":return o.words_background_unused;case"correct":return o.words_background_correct;case"near":return o.words_background_nearAnswer;case"wrong":return o.words_background_wrongAnswer}}};
  color: ${o.font_main};
`,O=c(q)`
  width: 60px;
`,ve=({enterWord:r,submitGuess:p,deleteWord:i,currentKeyBoard:f,isGameOver:e})=>{console.log(e);const t=[["Q","W","E","R","T","Y","U","I","O","P"],["A","S","D","F","G","H","J","K","L"],["Z","X","C","V","B","N","M"]].map((m,h)=>k(we,{children:[h===2&&a(O,{status:"unused",onClick:()=>{p()},disabled:e,children:"Enter"},"Enter"),m.map(y=>a(q,{status:f[y],value:y,onClick:()=>{r(y)},disabled:e,children:y},y)),h===2&&a(O,{status:"unused",onClick:()=>i(),disabled:e,children:"Back"},"Back")]},h));return a(ke,{children:t})},xe=c.div`
  background-color: ${o.background_main};
  width: 500px;
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`,Ae=()=>{const r=[Array(6).fill(Array(5).fill("")),Array(6).fill(Array(5).fill("TBD"))],p={A:"unused",B:"unused",C:"unused",D:"unused",E:"unused",F:"unused",G:"unused",H:"unused",I:"unused",J:"unused",K:"unused",L:"unused",M:"unused",N:"unused",O:"unused",P:"unused",Q:"unused",R:"unused",S:"unused",T:"unused",U:"unused",V:"unused",W:"unused",X:"unused",Y:"unused",Z:"unused"},[i,f]=b.exports.useState(r),[e,d]=b.exports.useState(0),[t,m]=b.exports.useState(0),[h,y]=b.exports.useState(he()),v=b.exports.useRef(!1),[C,x]=b.exports.useState("none"),[N,z]=b.exports.useState(!1),[M,_]=b.exports.useState(!1),[E,U]=b.exports.useState(!1),[j,L]=b.exports.useState(p),S=b.exports.useRef();b.exports.useEffect(()=>{S.current.focus(),_(!0)},[]),console.log("cheat: The answer is:",h);const R=()=>{t!==0&&(f([i[0].map((s,n)=>e!==n?s:s.map((l,g)=>t-1!==g?l:"")),i[1]]),m(t-1))},D=s=>{t!==5&&(f([i[0].map((n,l)=>e!==l?n:n.map((g,w)=>t!==w?g:s)),i[1]]),m(t+1))},P=s=>{let n="";for(let l of s)n+=l.toLowerCase();return $.indexOf(n)!==-1},K=()=>{i[0][e][4]!==""&&(P(i[0][e])?(x("valid"),G(i[0][e]),d(e+1),m(0)):x("invalid"),setTimeout(()=>{x("none")},1500))},T=s=>{const n=j;for(let l of s)n[l[0]]!=="correct"&&(n[l[0]]=l[1]);L(n)},G=s=>{const n=JSON.parse(JSON.stringify(h)),l=Array(5).fill("wrong"),g=[];let w=0;for(let u in s)n.indexOf(s[u])!==-1&&h[u]===s[u]&&(l[u]="correct",n.splice(u,1,""),w++);(w===5||e>5)&&(z(!0),U(!0));for(let u in s)n.indexOf(s[u])!==-1&&l[u]!=="correct"&&(l[u]="near",n.splice(n.indexOf(s[u]),1,""));for(let u in l)g.push([s[u],l[u]]);T(g),f([i[0],i[1].map((u,I)=>e!==I?u:l)])},H=s=>{const n=/[a-z]|[A-Z]/;s.key.length===1&&n.test(s.key)&&!E?D(s.key.toUpperCase()):s.key==="Enter"?K():s.key==="Backspace"&&R()};return k(xe,{onKeyDown:s=>{v.current||H(s),v.current=!0},onKeyUp:()=>v.current=!1,tabIndex:-1,ref:S,children:[M&&a(ye,{setIsShowingRule:_}),N&&a(ge,{setIsShowingResult:z,currentRow:e}),a(be,{}),C==="invalid"&&a(Q,{children:"\u984C\u5EAB\u4E2D\u4E0D\u5B58\u5728\u6B64\u5B57"}),a(ie,{currentMap:i,isSendingAnswer:C,currentRow:e,currentCol:t}),a(ve,{deleteWord:R,enterWord:D,submitGuess:K,currentKeyBoard:j,isGameOver:E})]})};function Fe(){return a(ee,{children:k("div",{className:"container",children:[a(Y,{}),a(Ae,{})]})})}V.render(a(X.StrictMode,{children:a(Fe,{})}),document.getElementById("root"));