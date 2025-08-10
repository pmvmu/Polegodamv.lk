// history-audio-player.js
// Audio Player for History Section with Language Support

class HistoryAudioPlayer {
  constructor() {
    // Audio tracks for different languages
    this.audioTracks = {
      en: '',  // English track path
      si: ''   // Sinhala track path
    };
    
    this.currentLanguage = 'en'; // Default language
    this.audioElement = null;
    this.isPlaying = false;
    this.currentTime = 0;
    this.duration = 0;
    
    this.init();
  }

  init() {
    // Get audio control elements
    this.playBtn = document.getElementById('playBtn');
    this.pauseBtn = document.getElementById('pauseBtn');
    this.stopBtn = document.getElementById('stopBtn');
    this.audioTitle = document.getElementById('listen-history-title');
    
    // Create audio element
    this.createAudioElement();
    
    // Set up event listeners
    this.setupEventListeners();
    
    // Get initial language from localStorage or default
    this.loadLanguagePreference();
    
    // Listen for language changes
    this.setupLanguageChangeListener();
  }

  createAudioElement() {
    this.audioElement = new Audio();
    this.audioElement.preload = 'metadata';
    
    // Audio event listeners
    this.audioElement.addEventListener('loadedmetadata', () => {
      this.duration = this.audioElement.duration;
      this.updateUI();
    });

    this.audioElement.addEventListener('timeupdate', () => {
      this.currentTime = this.audioElement.currentTime;
      this.updateProgress();
    });

    this.audioElement.addEventListener('ended', () => {
      this.isPlaying = false;
      this.currentTime = 0;
      this.updateUI();
    });

    this.audioElement.addEventListener('error', (e) => {
      console.error('Audio loading error:', e);
      this.showError();
    });
  }

  setupEventListeners() {
    if (this.playBtn) {
      this.playBtn.addEventListener('click', () => this.play());
    }

    if (this.pauseBtn) {
      this.pauseBtn.addEventListener('click', () => this.pause());
    }

    if (this.stopBtn) {
      this.stopBtn.addEventListener('click', () => this.stop());
    }
  }

  setupLanguageChangeListener() {
    // Listen for custom language change event
    document.addEventListener('languageChanged', (event) => {
      this.changeLanguage(event.detail.language);
    });

    // Also check for changes in localStorage
    window.addEventListener('storage', (event) => {
      if (event.key === 'selectedLanguage') {
        this.changeLanguage(event.newValue || 'en');
      }
    });
  }

  loadLanguagePreference() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    this.changeLanguage(savedLanguage);
  }

  changeLanguage(language) {
    if (this.currentLanguage === language) return;
    
    const wasPlaying = this.isPlaying;
    const currentPos = this.currentTime;
    
    // Stop current audio if playing
    if (this.isPlaying) {
      this.stop();
    }
    
    this.currentLanguage = language;
    this.audioElement.src = this.audioTracks[language];
    
    // Update title based on language
    this.updateTitle();
    
    // If audio was playing, resume from the same position (approximately)
    if (wasPlaying) {
      this.audioElement.addEventListener('loadedmetadata', () => {
        this.audioElement.currentTime = Math.min(currentPos, this.audioElement.duration);
        this.play();
      }, { once: true });
    }
    
    console.log(`Audio language changed to: ${language}`);
  }

  updateTitle() {
    if (this.audioTitle) {
      const titles = {
        en: "Listen to Our History",
        si: "අපගේ ඉතිහාසය අසන්න"
      };
      this.audioTitle.textContent = titles[this.currentLanguage] || titles.en;
    }
  }

  play() {
    if (!this.audioElement.src) {
      this.audioElement.src = this.audioTracks[this.currentLanguage];
    }
    
    this.audioElement.play()
      .then(() => {
        this.isPlaying = true;
        this.updateUI();
      })
      .catch((error) => {
        console.error('Error playing audio:', error);
        this.showError();
      });
  }

  pause() {
    this.audioElement.pause();
    this.isPlaying = false;
    this.updateUI();
  }

  stop() {
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
    this.isPlaying = false;
    this.currentTime = 0;
    this.updateUI();
  }

  updateUI() {
    if (this.playBtn && this.pauseBtn && this.stopBtn) {
      // Update button states
      if (this.isPlaying) {
        this.playBtn.style.opacity = '0.6';
        this.pauseBtn.style.opacity = '1';
        this.stopBtn.style.opacity = '1';
      } else {
        this.playBtn.style.opacity = '1';
        this.pauseBtn.style.opacity = '0.6';
        this.stopBtn.style.opacity = this.currentTime > 0 ? '1' : '0.6';
      }
    }
  }

  updateProgress() {
    // This method can be extended to show progress if you add a progress bar
    const percentage = (this.currentTime / this.duration) * 100;
    
    // Dispatch custom event for progress updates
    document.dispatchEvent(new CustomEvent('audioProgress', {
      detail: {
        currentTime: this.currentTime,
        duration: this.duration,
        percentage: percentage
      }
    }));
  }

  showError() {
    const errorMessages = {
      en: "Error loading audio file. Please try again later.",
      si: "ශ්‍රව්‍ය ගොනුව පූරණය කිරීමේ දෝෂයකි. කරුණාකර පසුව නැවත උත්සාහ කරන්න."
    };
    
    alert(errorMessages[this.currentLanguage] || errorMessages.en);
  }

  // Public method to get current language
  getCurrentLanguage() {
    return this.currentLanguage;
  }

  // Public method to check if audio is available for language
  isAudioAvailable(language) {
    return this.audioTracks.hasOwnProperty(language);
  }
}

// Initialize the audio player when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create global instance
  window.historyAudioPlayer = new HistoryAudioPlayer();
});

// Integration with existing language switching system
// Update your existing switchLanguage function in index translator.js
// Add this line at the end of both applyEnglishTranslations() and applySinhalaTranslations():

// For applyEnglishTranslations(), add:
// document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: 'en' } }));

// For applySinhalaTranslations(), add:
// document.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: 'si' } }));

function notifyLanguageChange(language) {
  document.dispatchEvent(new CustomEvent('languageChanged', {
    detail: { language: language }
  }));
}

// Export for module systems (if needed)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = HistoryAudioPlayer;
}