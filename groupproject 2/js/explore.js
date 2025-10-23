// ===== EXPLORE PAGE JAVASCRIPT =====

document.addEventListener('DOMContentLoaded', function() {
    // Sample character data
    const characters = [
        {
            id: 1,
            name: "Luna the Space Explorer",
            tagline: "An astronaut AI who loves sharing space facts and cosmic adventures.",
            category: "educational",
            popularity: 12400,
            rating: 4.8,
            tags: ["Educational", "Adventure", "Science"],
            icon: "fas fa-user-astronaut",
            color: "linear-gradient(135deg, #6d5dfc, #8a7dff)"
        },
        {
            id: 2,
            name: "Detective Noir",
            tagline: "A witty detective who solves mysteries with you in thrilling interactive stories.",
            category: "storytelling",
            popularity: 8700,
            rating: 4.7,
            tags: ["Mystery", "Interactive", "Storytelling"],
            icon: "fas fa-detective",
            color: "linear-gradient(135deg, #2a2d43, #4a4e69)"
        },
        {
            id: 3,
            name: "Mira the Best Friend",
            tagline: "Always there to listen, offer advice, and cheer you up whenever you need it.",
            category: "helpful",
            popularity: 15200,
            rating: 4.9,
            tags: ["Supportive", "Friendly", "Companion"],
            icon: "fas fa-smile",
            color: "linear-gradient(135deg, #ff7eb3, #ff9ec8)"
        },
        {
            id: 4,
            name: "Professor Quantum",
            tagline: "A brilliant physicist who makes complex science concepts easy to understand.",
            category: "educational",
            popularity: 6300,
            rating: 4.6,
            tags: ["Educational", "Science", "Physics"],
            icon: "fas fa-graduation-cap",
            color: "linear-gradient(135deg, #42e2b8, #6bf5d5)"
        },
        {
            id: 5,
            name: "Comedy Bot 3000",
            tagline: "Your personal stand-up comedian who's always ready with a joke or funny story.",
            category: "funny",
            popularity: 9800,
            rating: 4.5,
            tags: ["Funny", "Entertainment", "Comedy"],
            icon: "fas fa-theater-masks",
            color: "linear-gradient(135deg, #ffb347, #ffcc33)"
        },
        {
            id: 6,
            name: "Story Weaver",
            tagline: "A master storyteller who creates immersive, personalized stories just for you.",
            category: "storytelling",
            popularity: 11200,
            rating: 4.8,
            tags: ["Storytelling", "Creative", "Immersive"],
            icon: "fas fa-book-open",
            color: "linear-gradient(135deg, #a166ab, #c54b8c)"
        },
        {
            id: 7,
            name: "Game Master Pro",
            tagline: "Your ultimate gaming partner for strategy, tips, and interactive game sessions.",
            category: "games",
            popularity: 7500,
            rating: 4.7,
            tags: ["Games", "Strategy", "Interactive"],
            icon: "fas fa-gamepad",
            color: "linear-gradient(135deg, #ff6b6b, #ff8e8e)"
        },
        {
            id: 8,
            name: "Language Tutor",
            tagline: "A patient language teacher who helps you learn new languages through conversation.",
            category: "learning",
            popularity: 5400,
            rating: 4.6,
            tags: ["Learning", "Educational", "Languages"],
            icon: "fas fa-language",
            color: "linear-gradient(135deg, #4ecdc4, #67e6dc)"
        },
        {
            id: 9,
            name: "Poet's Soul",
            tagline: "A romantic AI who writes beautiful poetry and shares deep thoughts about life.",
            category: "romantic",
            popularity: 4200,
            rating: 4.4,
            tags: ["Romantic", "Creative", "Poetry"],
            icon: "fas fa-feather-alt",
            color: "linear-gradient(135deg, #c54b8c, #e57399)"
        },
        {
            id: 10,
            name: "Fitness Coach",
            tagline: "Your personal trainer who motivates you and creates customized workout plans.",
            category: "helpful",
            popularity: 6800,
            rating: 4.7,
            tags: ["Helpful", "Fitness", "Motivation"],
            icon: "fas fa-dumbbell",
            color: "linear-gradient(135deg, #667eea, #764ba2)"
        },
        {
            id: 11,
            name: "History Buff",
            tagline: "A history teacher who makes the past come alive with fascinating stories.",
            category: "educational",
            popularity: 5100,
            rating: 4.5,
            tags: ["Educational", "History", "Storytelling"],
            icon: "fas fa-landmark",
            color: "linear-gradient(135deg, #f093fb, #f5576c)"
        },
        {
            id: 12,
            name: "Code Mentor",
            tagline: "A programming expert who helps you learn to code through practical examples.",
            category: "learning",
            popularity: 8900,
            rating: 4.8,
            tags: ["Learning", "Programming", "Educational"],
            icon: "fas fa-code",
            color: "linear-gradient(135deg, #4facfe, #00f2fe)"
        }
    ];

    const charactersGrid = document.getElementById('charactersGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const searchInput = document.getElementById('characterSearch');
    const filterTags = document.querySelectorAll('.filter-tag');
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
    const popularityRadios = document.querySelectorAll('input[name="popularity"]');
    const sortSelect = document.getElementById('sortSelect');
    const applyFiltersBtn = document.querySelector('.apply-filters-btn');
    const resetFiltersBtn = document.querySelector('.reset-filters-btn');
    const interactionRange = document.querySelector('.interaction-range');
    const rangeValue = document.querySelector('.range-value');

    let displayedCharacters = 6;
    let currentFilters = {
        categories: ['funny', 'educational', 'storytelling', 'games'],
        popularity: 'all',
        search: '',
        interaction: 3
    };

    // Initialize the page
    function init() {
        renderCharacters();
        setupEventListeners();
        updateResultCount();
    }

    // Render characters based on current filters
    function renderCharacters() {
        const filteredCharacters = filterCharacters();
        const sortedCharacters = sortCharacters(filteredCharacters);
        const charactersToShow = sortedCharacters.slice(0, displayedCharacters);

        charactersGrid.innerHTML = '';

        if (charactersToShow.length === 0) {
            charactersGrid.innerHTML = `
                <div class="no-results" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
                    <i class="fas fa-search" style="font-size: 3rem; color: var(--gray); margin-bottom: 1rem;"></i>
                    <h3>No characters found</h3>
                    <p>Try adjusting your filters or search terms</p>
                </div>
            `;
            return;
        }

        charactersToShow.forEach(character => {
            const characterCard = createCharacterCard(character);
            charactersGrid.appendChild(characterCard);
        });

        // Show/hide load more button
        if (displayedCharacters >= sortedCharacters.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }

    // Filter characters based on current filters
    function filterCharacters() {
        return characters.filter(character => {
            // Category filter
            if (currentFilters.categories.length > 0 && !currentFilters.categories.includes(character.category)) {
                return false;
            }

            // Search filter
            if (currentFilters.search && !character.name.toLowerCase().includes(currentFilters.search.toLowerCase()) && 
                !character.tagline.toLowerCase().includes(currentFilters.search.toLowerCase()) &&
                !character.tags.some(tag => tag.toLowerCase().includes(currentFilters.search.toLowerCase()))) {
                return false;
            }

            // Popularity filter (simplified)
            if (currentFilters.popularity === 'trending' && character.popularity < 8000) {
                return false;
            }
            if (currentFilters.popularity === 'popular' && character.popularity < 5000) {
                return false;
            }
            if (currentFilters.popularity === 'new' && character.popularity > 3000) {
                return false;
            }

            return true;
        });
    }

    // Sort characters based on selected option
    function sortCharacters(characters) {
        const sortBy = sortSelect.value;
        
        switch (sortBy) {
            case 'popular':
                return characters.sort((a, b) => b.popularity - a.popularity);
            case 'newest':
                return characters.sort((a, b) => b.id - a.id);
            case 'name':
                return characters.sort((a, b) => a.name.localeCompare(b.name));
            case 'rating':
                return characters.sort((a, b) => b.rating - a.rating);
            default:
                return characters;
        }
    }

    // Create character card HTML
    function createCharacterCard(character) {
        const card = document.createElement('div');
        card.className = 'character-card-explore';
        card.innerHTML = `
            <div class="character-image" style="background: ${character.color};">
                <i class="${character.icon}"></i>
            </div>
            <div class="character-info">
                <h3 class="character-name">${character.name}</h3>
                <p class="character-tagline">${character.tagline}</p>
                <div class="character-stats">
                    <div class="stat">
                        <i class="fas fa-comments"></i>
                        <span>${(character.popularity / 1000).toFixed(1)}k</span>
                    </div>
                    <div class="stat">
                        <i class="fas fa-star"></i>
                        <span>${character.rating}</span>
                    </div>
                </div>
                <div class="character-tags">
                    ${character.tags.map(tag => `<span class="character-tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;

        card.addEventListener('click', () => {
            window.location.href = `character.html?id=${character.id}`;
        });

        return card;
    }

    // Update result count
    function updateResultCount() {
        const filteredCharacters = filterCharacters();
        const resultCount = document.querySelector('.result-count');
        resultCount.textContent = `(${filteredCharacters.length} characters)`;
    }

    // Setup event listeners
    function setupEventListeners() {
        // Search input
        searchInput.addEventListener('input', (e) => {
            currentFilters.search = e.target.value;
            displayedCharacters = 6;
            renderCharacters();
            updateResultCount();
        });

        // Quick filter tags
        filterTags.forEach(tag => {
            tag.addEventListener('click', () => {
                const category = tag.dataset.category;
                
                if (category === 'all') {
                    // Reset all category checkboxes
                    categoryCheckboxes.forEach(checkbox => {
                        checkbox.checked = true;
                    });
                    currentFilters.categories = ['funny', 'educational', 'storytelling', 'games', 'romantic', 'helpful', 'learning'];
                } else {
                    // Toggle this category
                    const checkbox = document.querySelector(`input[value="${category}"]`);
                    if (checkbox) {
                        checkbox.checked = !checkbox.checked;
                    }
                }
                
                // Update active state
                filterTags.forEach(t => t.classList.remove('active'));
                if (category === 'all') {
                    tag.classList.add('active');
                } else {
                    const allTag = document.querySelector('.filter-tag[data-category="all"]');
                    allTag.classList.remove('active');
                    tag.classList.add('active');
                }
                
                updateCategoriesFromCheckboxes();
                displayedCharacters = 6;
                renderCharacters();
                updateResultCount();
            });
        });

        // Category checkboxes
        categoryCheckboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                updateCategoriesFromCheckboxes();
                updateQuickFilterTags();
                displayedCharacters = 6;
                renderCharacters();
                updateResultCount();
            });
        });

        // Popularity radios
        popularityRadios.forEach(radio => {
            radio.addEventListener('change', () => {
                currentFilters.popularity = radio.value;
                displayedCharacters = 6;
                renderCharacters();
                updateResultCount();
            });
        });

        // Sort select
        sortSelect.addEventListener('change', () => {
            displayedCharacters = 6;
            renderCharacters();
        });

        // Interaction range
        interactionRange.addEventListener('input', (e) => {
            const value = parseInt(e.target.value);
            currentFilters.interaction = value;
            
            const levels = ['Casual', 'Light', 'Medium', 'Engaging', 'Deep'];
            rangeValue.textContent = levels[value - 1];
        });

        // Apply filters button
        applyFiltersBtn.addEventListener('click', () => {
            displayedCharacters = 6;
            renderCharacters();
            updateResultCount();
        });

        // Reset filters button
        resetFiltersBtn.addEventListener('click', () => {
            resetFilters();
            displayedCharacters = 6;
            renderCharacters();
            updateResultCount();
        });

        // Load more button
        loadMoreBtn.addEventListener('click', () => {
            displayedCharacters += 6;
            renderCharacters();
        });
    }

    // Update categories from checkboxes
    function updateCategoriesFromCheckboxes() {
        currentFilters.categories = Array.from(categoryCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);
    }

    // Update quick filter tags based on selected categories
    function updateQuickFilterTags() {
        const allChecked = categoryCheckboxes.length === currentFilters.categories.length;
        const allTag = document.querySelector('.filter-tag[data-category="all"]');
        
        if (allChecked) {
            allTag.classList.add('active');
        } else {
            allTag.classList.remove('active');
        }
        
        filterTags.forEach(tag => {
            if (tag.dataset.category !== 'all') {
                if (currentFilters.categories.includes(tag.dataset.category)) {
                    tag.classList.add('active');
                } else {
                    tag.classList.remove('active');
                }
            }
        });
    }

    // Reset all filters
    function resetFilters() {
        // Reset category checkboxes
        categoryCheckboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
        
        // Reset popularity radios
        document.querySelector('input[name="popularity"][value="all"]').checked = true;
        
        // Reset search
        searchInput.value = '';
        
        // Reset interaction range
        interactionRange.value = 3;
        rangeValue.textContent = 'Medium';
        
        // Reset quick filter tags
        filterTags.forEach(tag => {
            if (tag.dataset.category === 'all') {
                tag.classList.add('active');
            } else {
                tag.classList.remove('active');
            }
        });
        
        // Update current filters
        currentFilters = {
            categories: ['funny', 'educational', 'storytelling', 'games', 'romantic', 'helpful', 'learning'],
            popularity: 'all',
            search: '',
            interaction: 3
        };
    }

    // Initialize the page
    init();
});